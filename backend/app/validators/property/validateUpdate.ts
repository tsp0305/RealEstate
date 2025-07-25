import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'

export default class UpdateValidator {
    constructor(protected ctx: HttpContextContract) { }

    public schema = schema.create({

        name: schema.string.optional([
            rules.maxLength(100)
        ]),
        type: schema.string.optional([
            rules.maxLength(100)
        ]),

        price: schema.string.optional([
        ]),
        location: schema.string.optional([
            rules.maxLength(100)
        ]),
        owner_id: schema.number.optional([
            rules.exists({
                table: 'properties',
                column: 'id'
            })
        ])




    })

    public messages: CustomMessages = {
    }



}