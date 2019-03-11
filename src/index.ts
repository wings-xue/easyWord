import { ConnectionOptions, createConnection, Connection } from "typeorm"
import { root } from "./paths"
import { EnglishWord } from "./entity/wordStack"

import * as express from "express";
import * as bodyParser from "body-parser";
import { ENAMETOOLONG } from "constants";

const PORT = 3000;
const options: ConnectionOptions = {
  type: "sqlite",
  database: `${root}/data/line.sqlite`,
  entities: [EnglishWord],
  logging: true,
  synchronize: true,

}


// create typeorm connection
createConnection(options).then(connection => {
  const Repository = connection.getRepository(EnglishWord);

  // create and setup express app
  const app = express();
  app.use(bodyParser.json());

  // register routes
  app.get('/', function (req, res) {
    res.send('Hello World!');
  });


  app.get("/update", async function (req, res) {
    return Repository.find();
  });

  app.get("/find", async function (req, res) {
    return Repository.findOne();
  });

  app.get("/insert", async (req, res) => {
    let englishWord = new EnglishWord();
    englishWord.word = "ceshi";
    await Repository.save(englishWord);
    res.send("succeed")
  });


  // start express server
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });


});




