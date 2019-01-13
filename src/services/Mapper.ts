import * as similarity from 'string-similarity'
import { FakerWrapper } from './FakerWrapper'
import { Field } from './../models'
import { ValueTypeValidator } from './ValueTypeValidator'



export class Mapper
{
    static execute(field : Field)
    {
        let result = similarity.findBestMatch(field.name, Object.getOwnPropertyNames(FakerWrapper.execute()))
        let key = result['bestMatch'].target
        let value = FakerWrapper.execute()[ key ]
        if(ValueTypeValidator.execute(field, value))
        {
            return value
        }
        let type = ValueTypeValidator.values[field.type]
        return FakerWrapper.execute()[ type ]
    }
}
