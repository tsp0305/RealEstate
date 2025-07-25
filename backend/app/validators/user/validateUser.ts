// app/validators/user/validateUser.ts
import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'

export default class ValidateUser {
    constructor(protected ctx) { }

    public schema = schema.create({
        name: schema.string([rules.maxLength(100)]),
        email: schema.string({ trim: true }, [
            rules.email(),
            rules.unique({ table: 'users', column: 'email' })
        ]),
        password: schema.string([rules.minLength(6)]),
        phone: schema.string([rules.maxLength(10)]),
        role: schema.enum(['tenant', 'owner', 'staff'] as const)
    })

    public messages: CustomMessages = {
        'name.required': 'name is required',
        'email.required': 'email is required',
        'email.unique': 'email already exists',
        'password.required': 'password is required'
    }
}
