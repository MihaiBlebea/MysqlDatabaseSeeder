import { Field } from './Field'


type Values = String | Number | Boolean


export class Table
{
    private _name : String

    private _fields : Field[] = []

    private _values : { [key : string] : Values }[] = []
    

    constructor(name : String)
    {
        this._name = name
    }

    get name()
    {
        return this._name
    }

    get fields()
    {
        return this._fields
    }

    get values()
    {
        return this._values
    }

    addField(field : Field)
    {
        this.fields.push(field)
    }

    addFields(fields : Field[])
    {
        fields.map((field)=> {
            this.addField(field)
        })
    }

    addValue(values : Values[])
    {
        let result : { [key : string] : Values } = {}
        this._fields.forEach((field : Field, index)=> {
            result[field.name] = values[index]
        })
        this._values.push(result)
    }
}
