import { Field } from './../models';
declare type Value = String | Number | Boolean;
export declare class ValueTypeValidator {
    static values: {
        [key: string]: string;
    };
    static execute(field: Field, value: Value): boolean;
}
export {};
