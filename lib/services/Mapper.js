"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const similarity = require("string-similarity");
const FakerWrapper_1 = require("./FakerWrapper");
const ValueTypeValidator_1 = require("./ValueTypeValidator");
class Mapper {
    static execute(field) {
        let result = similarity.findBestMatch(field.name, Object.getOwnPropertyNames(FakerWrapper_1.FakerWrapper.execute()));
        let key = result['bestMatch'].target;
        let value = FakerWrapper_1.FakerWrapper.execute()[key];
        if (ValueTypeValidator_1.ValueTypeValidator.execute(field, value)) {
            return value;
        }
        let type = ValueTypeValidator_1.ValueTypeValidator.values[field.type];
        return FakerWrapper_1.FakerWrapper.execute()[type];
    }
}
exports.Mapper = Mapper;
