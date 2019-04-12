'use strict'

//const insta = require('./func.js');
const Client = require('instagram-private-api').V1;
const delay = require('delay');
const chalk = require('chalk');
const inquirer = require('inquirer');
//const Spinner = require('cli-spinner').Spinner;

const questionTools = [
    {
        type: "list",
        name: "Tools",
        message: "Select tools:\n ",
        choices:
            [
                "[1] Follow Followers Target",
                "[2] Follow Account By Hastag",
                "[3] Botlike Timeline v1 (With Sleep)",
                "[4] Unfollow All Following",
                "[5] Unfollow Not Followback",
                "\n"
            ]
    }
]
const main = async () => {
    //var syntaxtools;
    try {
        var toolChoise = await inquirer.prompt(questionTools);
        toolChoise = toolChoise.Tools;
        switch (toolChoise) {

            case "[1] Follow Followers Target":
                const fft = require('./tools/fft.js');
                await fft();
                break;

            case "[2] Follow Account By Hastag":
                const fah = require('./tools/fah.js');
                await fah();
                break;

            case "[3] Botlike Timeline v1 (With Sleep)":
                const botlike = require('./tools/botlike.js');
                await botlike();
                break;

            case "[4] Unfollow All Following":
                const unfollall = require('./tools/unfollall.js');
                await unfollall();
                break;

            case "[5] Unfollow Not Followback":
                const unfollnotfollback = require('./tools/unfollnotfolback.js');
                await unfollnotfollback();
                break;

            default:
                console.log('\nERROR:\n[?] Aw, Snap! \n[!] Something went wrong while displaying this tool!\n[!] Please try again!');
        }
    } catch (e) {
    }
}

console.log(chalk`{bold.green
  Ξ TITLE  : [⚡] My Instagram Priv8 Tools [⚡]
  Ξ UPDATE : 12:24 PM 4/12/2019
  Ξ AUTHOR : Noval Rahadian
  Ξ FILES  : https://github.com/mcakz/tools-ig}

{bold.yellow  ——————————————————  [THANKS TO]  ————————————————————
  [✓] CODE BY CYBER SCREAMER CCOCOT (ccocot@bc0de.net)
  [✓] FIXING & TESTING BY SYNTAX (@officialputu_id)
  [✓] CCOCOT.CO | BC0DE.NET | NAONLAH.NET | WingkoColi
  [✓] SGB TEAM REBORN | Zerobyte.id | ccocot@bc0de.net
  —————————————————————————————————————————————————————
    }`);
main()
