#!/usr/bin/env node

const program = require("commander");
const express = require("express");
const cors = require("cors");
const app = express();
const utils = require("./src/utils");

app.use(cors());

let DIR = undefined;

program
    .arguments("<directory>")
    .option("-p, --port <port>", "The port to run on")
    .action(function (dir) {
        DIR = dir;
    })
    .parse(process.argv);

app.get("/", (req, res, next) => {
    utils.getFileNames(DIR).then(data => {
        res.json(data);
    });
});

app.get("/:directory", (req, res, next) => {
    const directory = DIR + "/" + req.params.directory;
    utils.getFileNames(directory).then(data => {
        res.json(data);
    });
});

const port = program.port ? program.port : 9000;

app.listen(port, () => {
    console.log("Server running on port " + port);
});
