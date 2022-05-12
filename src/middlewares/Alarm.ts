import e, { NextFunction, Request, Response } from "express";
import Mailer from "@/services/Mail/Mailer";
import DB from "@/services/Database/Database";

let mailer = new Mailer();
let text = "";

const Alarm = async (data: number) => {
    const db = new DB();
    if (data == 1) { text = "Alarm is active!"; }
    else if (data == 0) { text = "Alarm is inactive!"; }
    const user = await db.getAll("User");
    user.map((userTemp) => {
        console.log("email Utilisateur", userTemp.email);
        mailer.sendMail(userTemp.email, "Alarm", text);
    });
}

export default Alarm;