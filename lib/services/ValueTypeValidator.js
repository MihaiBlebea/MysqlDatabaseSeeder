"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValueTypeValidator {
    static execute(field, value) {
        return typeof value === this.values[field.type];
    }
}
ValueTypeValidator.values = {
    varchar: 'string',
    int: 'number'
};
exports.ValueTypeValidator = ValueTypeValidator;
