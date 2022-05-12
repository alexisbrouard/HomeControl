import e, { NextFunction, Request, Response } from "express";
import User, { userUpdate } from "@/models/User";
import Mailer from "@/services/Mail/Mailer";
import router from "@/routes/Index";

let mailer = new Mailer();

const Alarm = () => {
    router.use(async (req: Request, res: Response, next: NextFunction) => { 
        try {
            const user = await User.find();
            user.map((userTemp) => {
                console.log("email Utilisateur", userTemp.email);
                mailer.sendMail(userTemp.email, "Alarm", "Alarm is active!");
            });
        } catch (error) {
            next(error);
        }
    })
}

export default Alarm;