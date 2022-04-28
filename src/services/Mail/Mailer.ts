import { EventEmitter } from "stream";
import IDatabase from "./IMailer";

const nodemailer = require("nodemailer");

class Mailer extends EventEmitter implements IDatabase {
    constructor() {
        super();
    }
    public async sendMail() {
        let testAccount = await nodemailer.createTestAccount();
        
        let tranposter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass
            }
        });

        let info = await tranposter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>',
            to: "alexis.brouard31@outlook.fr",
            subject: "Hello ✔",
            text: "Hello world?",
            html: "<b>Hello world?</b>"
        });

        console.log("Message sent: %s", info.messageId);
    }
}

export default Mailer;