import { Router } from "express";
import passport from "passport";
import { isAuth } from "../middlewares/isAuth.js";
import authController from "../controllers/authController.js";
import multer from "multer";
const storageStrategy = multer.memoryStorage();
const upload = multer({ storage: storageStrategy });

const routeAuth = Router();
/*============================[Rutas API: /]============================*/
routeAuth.get('/', isAuth, authController.getHome);
routeAuth.get('/productos', isAuth, authController.productos);
routeAuth.get('/login', authController.login);
routeAuth.get('/login-error', authController.loginError);
routeAuth.get('/registro', authController.registro);
routeAuth.get('/registro-error', authController.registroError);
routeAuth.get('/logout', isAuth, authController.logout);
routeAuth.post('/login', passport.authenticate('login',
    { failureRedirect: '/login-error' }), authController.loginPost);
routeAuth.post('/registro', upload.single('image'), passport.authenticate('signup', 
    { failureRedirect: '/registro-error' }), authController.registroPost);

export default routeAuth
