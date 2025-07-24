import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'

export default class IdValidator {
    constructor(protected ctx: HttpContextContract) { }

    public schema = schema.create({
        id: schema.number([
            rules.unsigned(),
            rules.exists({
                table: 'properties',
                column: 'id'
            })

        ])
    })

    public messages: CustomMessages = {
        'id.exists': 'property does not exists'
    }



}