import * as express from "express";
import { readdirSync } from "fs";
import { join } from "path";
export default class App {
  public app: express.Application;
  public port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.app.set("trust proxy", true);
    console.log("Server starting...");
    this.handleMiddlewares();
    this.handleRoutes();
  }

  private handleRoutes(): void {
    readdirSync(join(__dirname, "routes")).forEach((dir) => {
      const routes = readdirSync(join(__dirname, `routes/${dir}`)).filter(
        (file) => file.endsWith(".js")
      );
      for (const file of routes) {
        const getFileName = require(join(__dirname, `routes/${dir}/${file}`));
        this.app.use(
          `/api/v${getFileName.infos.version}/${getFileName.infos.route}`,
          getFileName.infos.router
        );
        console.log(
          `Route chargée : /api/v${getFileName.infos.version}/${getFileName.infos.route}`
        );
      }
    });
    this.app.get("/test", (req: any, res: any) => {
      const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
      console.log("ip : " + ip); // ip address of the user
      res.end();
    });
  }
  private handleMiddlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on port ${this.port}`);
    });
  }
}
