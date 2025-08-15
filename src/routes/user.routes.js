import { Router } from "express";
import { loginUser, registerUser,logoutUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()

router.post("/register", 
    upload.fields([
  { name: "avatar", maxCount: 1 },
  { name: "coverImage", maxCount: 1 }
]),
    registerUser);

router.route("/login").post(loginUser)
//secured routes
router.route("/logout").post(verifyJWT, logoutUser)
// filepath: d:\myYoutube\src\routes\user.routes.js
router.get("/test", (req, res) => res.send("Test route working"));
//router.route("/login").post(login)

export default router