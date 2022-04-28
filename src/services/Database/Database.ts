import { EventEmitter } from "stream";
import IDatabase from "./IDatabase";

class Database extends EventEmitter implements IDatabase {
	constructor() {
		super();
	}

	dictionaryViaLiteral = {
		User: User,
		Sensor: Sensor,
		Actuator: Actuator,
	};

	getAll(model: string): any {
		this.dictionaryViaLiteral[model].find();
		return {};
	}

	getById(model: keyof typeof this.dictionaryViaLiteral, id: string): any {
		this.dictionaryViaLiteral[model].findOne({ _id: id });
		return {};
	}

	create(model: string, data: any): boolean {
		return true;
	}

	update(model: string, id: string, data: any): boolean {
		return true;
	}

	delete(model: string, id: string): boolean {
		return true;
	}
}

export default Database;
