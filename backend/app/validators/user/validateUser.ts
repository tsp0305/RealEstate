import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'

export default class userIdValidator {
    constructor(protected ctx: HttpContextContract) { }

    public schema = schema.create({
        name: schema.string([
            rules.maxLength(100),
        ]),
        email: schema.string([
            rules.email(),
            rules.unique({ table: 'users', column: 'email' })
        ]),
        password: schema.string([
            rules.minLength(6)
        ]),
        phone: schema.string([
            rules.mobile()
        ]),
        role: schema.enum([
            ['tenant', 'owner', 'staff'] as const
        ])
    })

    public messages: CustomMessages = {
        'name.required': 'name is required',
        'email.required': 'email is required',
        'email.unique': 'email already exists',
        'password.required': 'password is required'
    }



}