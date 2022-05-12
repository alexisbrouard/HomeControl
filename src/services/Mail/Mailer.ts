import { EventEmitter } from "stream";
import IDatabase from "./IMailer";

const nodemailer = require("nodemailer");

class Mailer extends EventEmitter implements IDatabase {
    constructor() {
        super();
    }
    public async sendMail(to: string, subject: string, text: string): Promise<void> {
        let tranposter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user:'noreply.homecontrol@gmail.com',
                pass: process.env.MAIL_PASSWORD
            }
        });
        let info = await tranposter.sendMail({
            from: 'noreply.homecontrol@gmail.com',
            to: to,
            subject: subject,
            text: text,
            html: "<b>" + text + "</b>"
        });

        console.log("Message sent: %s", info.messageId);
    }
}

export default Mailer;