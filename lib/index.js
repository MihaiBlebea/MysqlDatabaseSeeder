"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("./services");
const models_1 = require("./models");
var DatabaseSeeder;
(function (DatabaseSeeder) {
    DatabaseSeeder.connect = (host, database, user, password, port) => {
        return new services_1.MysqlConnector(host, database, user, password, port);
    };
    DatabaseSeeder.seed = (connection, count) => {
        if (!count) {
            count = 100;
        }
        let exporter = new services_1.Exporter(connection);
        return exporter.getFieldsInDatabase(connection.databaseName).then((tables) => {
            return tables.map((table) => {
                let i = 0;
                while (i < count) {
                    let row = table.fields.map((field) => {
                        return services_1.Mapper.execute(field);
                    });
                    table.addValue(row);
                    i++;
                }
                return table;
            });
        }).then((tables) => {
            let seeder = new services_1.Seeder(connection);
            return tables.map((table) => {
                return seeder.execute(table).then((result) => {
                    return table;
                }).catch((error) => {
                    console.log(error);
                });
            });
        }).catch((error) => {
            console.log(error);
        });
    };
    DatabaseSeeder.truncate = (connection, tableName) => {
        let truncator = new services_1.TableTruncator(connection);
        if (tableName) {
            let table = new models_1.Table(tableName);
            return truncator.execute(table);
        }
        let exporter = new services_1.Exporter(connection);
        exporter.getFieldsInDatabase(connection.databaseName).then((tables) => {
            tables.map((table) => {
                truncator.execute(table).then((result) => {
                    console.log(`TABLE ${table.name} WAS TRUNCATED`);
                }).catch((error) => {
                    console.log(error);
                });
            });
        });
    };
})(DatabaseSeeder = exports.DatabaseSeeder || (exports.DatabaseSeeder = {}));
