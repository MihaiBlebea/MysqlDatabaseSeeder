import { Field } from './Field';
declare type Values = String | Number | Boolean;
export declare class Table {
    private _name;
    private _fields;
    private _values;
    constructor(name: String);
    readonly name: String;
    readonly fields: Field[];
    readonly values: {
        [key: string]: Values;
    }[];
    addField(field: Field): void;
    addFields(fields: Field[]): void;
    addValue(values: Values[]): void;
}
export {};
