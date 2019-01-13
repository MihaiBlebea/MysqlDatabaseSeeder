"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Field {
    constructor(name, type, allowNull, key, defaultValue, extra) {
        this._name = name;
        this._type = type;
        this._allowNull = allowNull;
        this._key = key;
        this._defaultValue = defaultValue;
        this._extra = extra;
    }
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
}
exports.Field = Field;
