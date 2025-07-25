import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'

export default class validateProp {
    constructor(protected ctx: HttpContextContract) { }

    public schema = schema.create({
        owner_id: schema.number([
            rules.exists({
                table: 'users',
                column: 'id'
            })
        ]),
        prop_id: schema.number([
            rules.exists({
                table: 'properties',
                column: 'id'
            })
        ]),
        tent_id: schema.number([
            rules.exists({
                table: 'users',
                column: 'id'
            })

        ]),
        start_date: schema.date.optional(),
        end_date: schema.date.optional(),
        amount: schema.number([
            rules.unsigned()
        ]),
        status: schema.enum([
            'Active', 'Inactive'
        ]),


    })

    public messages: CustomMessages = {
    }



}