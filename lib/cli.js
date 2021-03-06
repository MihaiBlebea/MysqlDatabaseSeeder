"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + '/../.env' });
const args = process.argv;
const index_1 = require("./index");
let connection = index_1.DatabaseSeeder.connect(process.env.LOCAL_MYSQL_HOST, process.env.LOCAL_MYSQL_DATABASE, process.env.LOCAL_MYSQL_USER, process.env.LOCAL_MYSQL_PASSWORD, process.env.LOCAL_MYSQL_PORT);
if (args[2] && args[2] === 'seed') {
    if (args[3] && typeof parseInt(args[3]) === 'number') {
        index_1.DatabaseSeeder.seed(connection, parseInt(args[3])).then((promises) => {
            console.log(chalk_1.default.green(`Tables seeded with ${args[3]} rows`));
        });
    }
    else {
        index_1.DatabaseSeeder.seed(connection).then((result) => {
            console.log(chalk_1.default.green(`Tables seeded with 100 rows`));
        });
    }
    console.log(chalk_1.default.green('Job done'));
}
if (args[2] && args[2] === 'truncate') {
    if (args[3] && args[3].includes('table=')) {
        index_1.DatabaseSeeder.truncate(connection, args[3].split('=')[1]);
    }
    else {
        index_1.DatabaseSeeder.truncate(connection);
    }
    console.log(chalk_1.default.green('Job done'));
}
