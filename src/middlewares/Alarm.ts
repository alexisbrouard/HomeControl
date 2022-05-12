import e, { NextFunction, Request, Response } from "express";
import User, { userUpdate } from "@/models/User";
import Mailer from "@/services/Mail/Mailer";
import router from "@/routes/Index";

let mailer = new Mailer();
let text = "";

const Alarm = async (data: number) => {
    if (data == 1) { text = "Alarm is active!"; }
    else if (data == 0) { text = "Alarm is inactive!"; }
    const user = await User.find();
    user.map((userTemp) => {
        console.log("email Utilisateur", userTemp.email);
        mailer.sendMail(userTemp.email, "Alarm", text);
    });
}

export default Alarm;