export default interface IAuthenticator {
  login: (password: string, user: any) => Promise<string>;
  authenticate: (token: string) => boolean;
}
