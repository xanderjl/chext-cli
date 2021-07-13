#!/usr/bin/env node
const inquirer = require("inquirer");
const degit = require("degit");

const cwd = process.cwd();

inquirer
  .prompt([
    {
      type: "input",
      message: "Please give your project a name:",
      name: "projectName",
      default: "chext-starter",
    },
    {
      type: "list",
      message: "Please select a starter variant:",
      name: "starterBranch",
      choices: ["main", "sanity"],
      default: "main",
    },
  ])
  .then(({ projectName, starterBranch }) => {
    let path = cwd + "/" + projectName;
    let branch = starterBranch;

    const emitter = degit(`XanderJL/chext-starter#${branch}`, {
      verbose: true,
    });

    emitter.on("info", (info) => {
      console.log(info.message);
    });

    emitter.clone(path).then(() => {
      console.log("done");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Oops. Something went wrong.")
    } else {
      console.error(`¯\\_(ツ)_/¯`)
    }
  });
