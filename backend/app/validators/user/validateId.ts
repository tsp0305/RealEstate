import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'

export default class userIdValidator {
    constructor(protected ctx: HttpContextContract) { }

    public schema = schema.create({
        id: schema.number([
            rules.unsigned(),
            rules.exists({
                table: 'users',
                column: 'id'
            })]),



    })

    public messages: CustomMessages = {
        'id.exists': 'user does not exists'
    }



}