"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Seeder {
    constructor(connection) {
        this.connection = connection;
    }
    buildKeyString(fields) {
        let keys = [];
        fields.forEach((field) => {
            if (field.name !== 'id') {
                keys.push(field.name);
            }
        });
        return `(${keys.join(', ')})`;
    }
    execute(table) {
        let values = [];
        table.values.forEach((value) => {
            let row = [];
            Object.keys(value).forEach((key) => {
                if (key !== 'id') {
                    row.push(value[key]);
                }
            });
            values.push(row);
        });
        return this.connection.query(`INSERT
             INTO ${table.name}
             ${this.buildKeyString(table.fields)}
             VALUES ?`, [values]);
    }
}
exports.Seeder = Seeder;
