import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'

export default class userIdValidator {
    constructor(protected ctx: HttpContextContract) { }

    public schema = schema.create({
        name: schema.string.optional([
            rules.maxLength(100),
        ]),
        email: schema.string.optional([
            rules.email(),
            rules.unique({ table: 'users', column: 'email' })
        ]),
        password: schema.string.optional([
            rules.minLength(6)
        ]),
        phone: schema.string.optional([
            rules.mobile()
        ]),
        role: schema.enum.optional(
            ['tenant', 'owner', 'staff'] as const
        )
    })

    public messages: CustomMessages = {

        'email.unique': 'email already exists',

    }



}