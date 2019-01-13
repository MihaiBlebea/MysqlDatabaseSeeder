export declare class Field {
    private _name;
    private _type;
    private _allowNull;
    private _key;
    private _defaultValue;
    private _extra;
    constructor(name: string, type: string, allowNull: string, key: string, defaultValue: string, extra: string);
    readonly name: string;
    readonly type: string;
}
