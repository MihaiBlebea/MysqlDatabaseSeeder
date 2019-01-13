"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Table {
    constructor(name) {
        this._fields = [];
        this._values = [];
        this._name = name;
    }
    get name() {
        return this._name;
    }
    get fields() {
        return this._fields;
    }
    get values() {
        return this._values;
    }
    addField(field) {
        this.fields.push(field);
    }
    addFields(fields) {
        fields.map((field) => {
            this.addField(field);
        });
    }
    addValue(values) {
        let result = {};
        this._fields.forEach((field, index) => {
            result[field.name] = values[index];
        });
        this._values.push(result);
    }
}
exports.Table = Table;
