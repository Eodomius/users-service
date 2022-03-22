import { verify } from "jsonwebtoken";
import { readFileSync } from "fs";
import type { Response } from "express";
import { join } from "path";
const public_key = readFileSync(join(__dirname, "../../public.key"));
var verifyOptions: any = {
  expiresIn: "12h",
  algorithm: ["RS256"],
};
export default (req: any, res: Response, next: any) => {
  try {
    if (!req.headers || (req.headers && !req.headers.authorization))
      throw "Missing authorization header.";
    const requestToken = req.headers.authorization?.split(" ")[1];
    const requestAuthor = req.headers.authorization?.split(" ")[0];
    if (!requestToken || !requestAuthor) throw "Invalid authorization header.";
    verify(requestToken, public_key, verifyOptions);
    next();
  } catch (e) {
    console.log(e);

    res.status(401).json("Requete non authentifiée");
  }
};
