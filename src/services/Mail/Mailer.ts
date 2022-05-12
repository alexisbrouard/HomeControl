import { EventEmitter } from "stream";
import IDatabase from "./IMailer";

const nodemailer = require("nodemailer");

class Mailer extends EventEmitter implements IDatabase {
    constructor() {
        super();
    }
    public async sendMail() {
        let tranposter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user:'noreply.homecontrol@gmail.com',
                pass: 'HomeControl31!'
            }
        });

        let info = await tranposter.sendMail({
            from: '"noreply.homecontrol@gmail.com',
            to: "alexis.brouard31@outlook.fr",
            subject: "Hello ✔",
            text: "Hello world?",
            html: "<b>Hello world?</b>"
        });

        console.log("Message sent: %s", info.messageId);
    }
}

export default Mailer;