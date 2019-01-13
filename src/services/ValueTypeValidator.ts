import { Field } from './../models'


type Value = String | Number | Boolean


export class ValueTypeValidator
{
    static values : { [key : string] : string } = {
        varchar: 'string',
        int: 'number'
    }

    static execute(field : Field, value : Value)
    {
        return typeof value === this.values[field.type]
    }
}
