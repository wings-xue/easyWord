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


  app.get("/insert", async function (req, res) {
    let englishWord = new EnglishWord();
    englishWord.word = req.query.word;
    englishWord.description = req.query.description;
    englishWord.sentence = req.query.sentence;
    englishWord.translate = req.query.translate;
    englishWord.nextDate = new Date();
    englishWord.views = 1;
    englishWord.remember = false; 
    return Repository.save(englishWord);
  });

  app.get("/find", async function (req, res) {
    return Repository.findOne();
  });



  app.get("/update", async (req, res) => {
    let word = req.query.word
    let isRemeber = req.query.remember
    let review = req.query.review
  
   
    let englisWord = await Repository.findOne({word: word});
    englisWord.nextDate = new Date()
    if (review == "ok") {
      englisWord.remember = true;
    }
    await Repository.save(englisWord);
    console.log("save " + word + "succeed");
    res.send("000")
  });


  // start express server
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });


});




