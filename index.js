#!/usr/bin/env node
const inquirer = require("inquirer");
const degit = require("degit");
const ora = require("ora");
const { exec } = require("child_process");

const cwd = process.cwd();
const spinner = ora({ text: "Installing packages", color: "green" });

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
      choices: [
        "vanilla chext",
        "with CMS (yarn only)",
        "typescript",
        "typescript with CMS (yarn only)",
      ],
      default: "vanilla",
    },
    {
      type: "list",
      message: "Select your package manager",
      name: "pkgManager",
      choices: ({ starterBranch }) => {
        switch (starterBranch) {
          case "with CMS (yarn only)":
          case "typescript with CMS (yarn only)":
            return ["yarn"];
          default:
            return ["npm", "yarn"];
        }
      },
      default: "npm",
    },
  ])
  .then(({ projectName, starterBranch, pkgManager }) => {
    let path = cwd + "/" + projectName;
    let branch = "";

    switch (starterBranch) {
      case "vanilla chext":
        branch = "main";
        break;
      case "with CMS (yarn only)":
        branch = "sanity";
        break;
      case "typescript":
        branch = "typescript";
        break;
      case "typescript with CMS (yarn only)":
        branch = "typescript-sanity";
        break;
      default:
        branch = "main";
    }

    const emitter = degit(`XanderJL/chext-starter#${branch}`, {
      verbose: true,
    });

    emitter.on("info", (info) => {
      console.log(info.message);
    });

    emitter.clone(path).then(() => {
      console.log("done");

      let installer = "";

      switch (pkgManager) {
        case "yarn":
          switch (starterBranch) {
            case "with CMS (yarn only)":
            case "typescript with CMS (yarn only)":
              installer = "yarn install && cd studio && yarn install && cd ..";
              break;
            default:
              installer = `yarn install`;
              break;
          }
          break;
        default:
          installer = "npm install";
      }

      spinner.start();

      exec(`cd ${projectName} && ${installer}`, (error, stdout, stderr) => {
        spinner.stop();
        console.log(stdout);
        console.error(stderr);
        if (error) {
          console.error(error);
        } else {
          console.log(
            "\x1b[32m",
            `You're all set! run cd ${projectName} && ${
              pkgManager === "yarn" ? "yarn" : "npm run"
            } dev`
          );
        }
      });
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Oops. Something went wrong.");
    } else {
      console.error(`¯\\_(ツ)_/¯`);
    }
  });
