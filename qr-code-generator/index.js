import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const questions = [
  {
    type: "input",
    name: "url",
    message: "What is the URL you would like to create a QR code of?",
  },
];

function answerHandler(answers) {
  const url = answers.url;
  createQrImage(url);
  writeUrlToFile(url);
}

function createQrImage(url) {
  const qrPng = qr.image(url, { type: "png" });
  qrPng.pipe(fs.createWriteStream("qr_img.png"));
}

function writeUrlToFile(url) {
  fs.writeFile("URL.txt", url, (err) => {
    if (err) {
      console.log("There was an error writing the URL to the file.");
    } else {
      console.log("The file has been saved!");
    }
  });
}

inquirer
  .prompt(questions)
  .then(answerHandler)
  .catch((error) => {
    console.log("There was an error getting your input.");
  });
