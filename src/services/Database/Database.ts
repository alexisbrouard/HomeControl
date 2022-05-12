import actuator from "@/models/Actuator";
import sensor from "@/models/Sensor";
import user from "@/models/User";
import { EventEmitter } from "stream";
import { TypeOf } from "zod";
import IDatabase from "./IDatabase";

class Database extends EventEmitter implements IDatabase {
  constructor() {
    super();
  }

  dictionaryViaLiteral = {
    User: user,
    Sensor: sensor,
    Actuator: actuator,
  };

  public async getAll(model: keyof typeof this.dictionaryViaLiteral) {
    return await this.dictionaryViaLiteral[model].find();
  }

  public async getById(
    model: keyof typeof this.dictionaryViaLiteral,
    id: string
  ) {
    return await this.dictionaryViaLiteral[model].findById(id);
  }

  public async login(
    model: keyof typeof this.dictionaryViaLiteral,
    email: string
  ) {
    return await this.dictionaryViaLiteral[model].findOne({ email: email });
  }

  public async create(
    model: keyof typeof this.dictionaryViaLiteral,
    data: any
  ) {
    return await this.dictionaryViaLiteral[model].create(data);
  }

  public async update(
    model: keyof typeof this.dictionaryViaLiteral,
    id: string,
    data: any
  ) {
    console.log(data);
    await this.dictionaryViaLiteral[model].updateOne({_id: id}, { $set: data })

    // this.dictionaryViaLiteral[model].findByIdAndUpdate(id, { $set: data });
  }

  public async delete(
    model: keyof typeof this.dictionaryViaLiteral,
    id: string
  ) {
    await this.dictionaryViaLiteral[model].findByIdAndDelete(id);
  }
}

export default Database;
