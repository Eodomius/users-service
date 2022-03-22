import App from "./app";

const app = new App(3000);
app.listen();

import { sign } from "jsonwebtoken";
import { readFileSync } from "fs";
import { join } from "path";
const private_key = readFileSync(join(__dirname, "../private.key"));

// SIGNING OPTIONS
var signOptions: any = {
  algorithm: "RS256",
};

const token = sign(
  {
    exp: Math.floor(Math.floor(Date.now() / 1000) + 6 * 60 * 60),
    expiresIn: 20000,
  },
  private_key,
  signOptions
);
console.log(token);
