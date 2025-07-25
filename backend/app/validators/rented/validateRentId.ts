import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'

export default class validateRentId {
    constructor(protected ctx: HttpContextContract) { }

    public schema = schema.create({
        id: schema.number([
            rules.unsigned(),
            rules.exists({
                table: 'renteds',
                column: 'id'
            })

        ])
    })

    public messages: CustomMessages = {
        'id.exists': 'id does not exists'
    }

    public data = {
        id: this.ctx.params.id
    }

}