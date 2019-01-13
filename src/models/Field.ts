export class Field
{
    private _name : string

    private _type : string

    private _allowNull : string

    private _key : string

    private _defaultValue : string

    private _extra : string

    constructor(
        name : string,
        type : string,
        allowNull : string,
        key : string,
        defaultValue : string,
        extra : string)
    {
        this._name = name
        this._type = type
        this._allowNull = allowNull
        this._key = key
        this._defaultValue = defaultValue
        this._extra = extra
    }

    get name()
    {
        return this._name
    }

    get type()
    {
        return this._type
    }
}
