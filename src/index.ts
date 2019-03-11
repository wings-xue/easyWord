import { ConnectionOptions } from "typeorm"
import { root } from "./paths"
import { EnglishWord } from "./entity/wordStack"

import * as express from "express";
import * as bodyParser from "body-parser";


const options: ConnectionOptions = {
  type: "sqlite",
  database: `${root}/data/line.sqlite`,
  entities: [EnglishWord],
  logging: true
}

class App {

  public app: express.Application;

  constructor() {
    this.app = express();
    this.say();
  }

  say() {
    this.app.get('/', function (req, res) {
      res.send('Hello World!')
    })
  }

  runServer(port: number) {
    this.app.listen(port, () => {
      console.log('Express server listening on port ' + PORT)
    })
  }
}


const PORT = 3000;
let app = new App();
app.runServer(PORT);






