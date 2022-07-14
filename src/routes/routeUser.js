import { Router } from "express";
import logger from "../utils/loggers.js";
import passport from "passport";
import { isAuth } from "../middlewares/isAuth.js";
import allProducts from "../services/listProductsOnDB.js";
const listProductsOnDB = allProducts;

import multer from "multer";
//const upload = multer({ dest: "uploads" }); >>>> pasa al código de abajo
const storageStrategy = multer.memoryStorage();
const upload = multer({ storage: storageStrategy });

import sharp from "sharp";
import fs from "fs";

const routeUser = Router();


/*============================[Rutas API: /]============================*/
routeUser

  // .post('/login', passport.authenticate('login',
  //   { failureRedirect: '/login-error' }), (req, res) => {
  //     logger.info(`Se registra petición POST /login`)
  //     res.render('ingreso', { listProductsOnDB, nombre: req.user.username, email: req.user.email })
  //   })

  // .post('/registro', upload.single('image'), passport.authenticate('signup',
  //   { failureRedirect: '/registro-error' }), async (req, res) => {
  //     const image = req.file;
  //     console.log(image);
  //     const processImage = sharp(image.buffer)
  //     const data = await processImage.resize(200, 200).toBuffer();
  //     fs.writeFileSync(`avatar/users/${image.originalname}`, data);
  //     logger.info(`Se registra petición POST /registro`)
  //     res.redirect('/login')
  //   })



export default routeUser;
