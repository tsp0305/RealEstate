import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'

export default class propValidator {
    constructor(protected ctx: HttpContextContract) { }

    public schema = schema.create({


        name: schema.string([
            rules.maxLength(100)
        ]),
        type: schema.string([
            rules.maxLength(100)
        ]),

        price: schema.string([
            rules.unsigned()
        ]),
        location: schema.string([
            rules.maxLength(100)
        ]),
        owner_id: schema.number([
            rules.exists({
                table: 'properties',
                column: 'id'
            })
        ])


    })

    public messages: CustomMessages = {
    }



}