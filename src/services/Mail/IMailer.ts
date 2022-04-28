export default interface IMailer {
    sendMail(): Promise<any>;
}