import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'

export default class validateLogin {
    constructor(protected ctx: HttpContextContract) { }

    public schema = schema.create({
        email: schema.string([
            rules.exists({
                table: 'users',
                column: 'email'
            })

        ]),

        password: schema.string([
            rules.minLength(6)
        ])
    })

    public messages: CustomMessages = {
        'email.exists': 'user does not exists',
        'password.required': 'password is required',
        'password.minlength': 'password invalid'

    }



}