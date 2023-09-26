let createError = require('http-errors');
let express = require('express');
const session = require('express-session');
let path = require('path');
let cookieParser = require('cookie-parser');
let flash = require('connect-flash');
let bodyParser = require('body-parser');
require('dotenv').config()
var methodOverride = require('method-override');
const multer = require("multer");

let port = process.env.PORT;
let app = express();

//Setting storage engine
const storage = multer.diskStorage({
  destination: "./public/assets/imagen_productos",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});

const verificarImagen = function (file, cb) {
  const fileTypes = /jpeg|jpg|png|bmp/;

  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) return cb(null, true);
  else cb("Error de carga de imagen");

};

//initializing multer
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    verificarImagen(file, cb);
  },
});

app.set('trust proxy', 1) // trust first proxy

// view engine setup
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(session({
  secret: 'julian_app',
  resave: false,
  saveUninitialized: true,
}))
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

/* ENRUTADO */
let indexRouter = require('./routes/index');
let clientRouter = require('./routes/client');
let adminRouter = require('./routes/admin');


let listen = app.listen(port,()=>{
  console.log("Port listening in :"+port);
});
let moment = require('moment');
moment.locale('es');
app.use(function(req, res, next){
  res.locals.session = req.session;
  res.locals.moment = moment;
  next();
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(function(req, res, next) {
  res.locals.user = req.session;
  next();
});

app.post("/admin/productos", upload.single("imagen"), (req, res,next) => {
  if (req.file) next();
  else res.status(404).send("Please upload a valid image");
});
app.use('/', indexRouter);
app.use('/client', clientRouter);
app.use('/admin', adminRouter);

app.use((req, res, next) => {
  res.redirect("/client/home");
})
module.exports = app;





