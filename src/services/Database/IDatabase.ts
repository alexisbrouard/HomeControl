export default interface IDatabase {
    getAll(model: string): any;
    getById(model: string, id: string): any;
    create(model: string, data: any): boolean;
    update(model: string, id: string, data: any): boolean;
    delete(model: string, id: string): boolean;
}