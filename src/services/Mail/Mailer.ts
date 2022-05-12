import IMailer from "./IMailer";
import nodemailer from "nodemailer";
import eventEmitter from "@/emitter";

class Mailer implements IMailer {
  constructor() {
    eventEmitter.addListener("test", this.sendMail);
  }

  public async sendMail(
    to: string,
    subject: string,
    text: string
  ): Promise<void> {
    let tranposter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "noreply.homecontrol@gmail.com",
        pass: process.env.MAIL_PASSWORD,
      },
    });
    let info = await tranposter.sendMail({
      from: "noreply.homecontrol@gmail.com",
      to: to,
      subject: subject,
      text: text,
      html: "<b>" + text + "</b>",
    });

    console.log("Message sent: %s", info.messageId);
  }
}

export default Mailer;
