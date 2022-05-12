export default interface IDatabase {
  getAll(model: string): Promise<any[]>;
  getById(model: string, id: string): any;
  login(model: string, email: string): any;
  create(model: string, data: any): any;
  update(model: string, id: string, data: any): void;
  delete(model: string, id: string): void;
}
