import e, { NextFunction, Request, Response } from "express";
import DB from "@/services/Database/Database";
import eventEmitter from "@/emitter";

const Alarm = async (data: number) => {
  let text = "";
  const db = new DB();
  if (data == 1) {
    text = "Alarm is active!";
  } else if (data == 0) {
    text = "Alarm is inactive!";
  }
  const user = await db.getAll("User");
  user.map((userTemp) => {
    console.log("email Utilisateur", userTemp.email);
    eventEmitter.emit("test", userTemp.email, "Alarm", text);
  });
};

export default Alarm;
