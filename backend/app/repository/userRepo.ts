import User from "App/Models/User";

export default class UserRepository {

    public async show() {
        const res = await User.all()
        return res
    }

    public async signUp(payload) {
        const res = await User.create(payload)

        return res.serialize()
    }

    public async login(payload, auth) {
        const { email, password } = payload
        const token = await auth.use('api').attempt(email, password, {
            expiresIn: '30mins'
        })
        const data = await User.findBy('email', email)

        const res = {
            token: token.token, data
        }
        return res
    }

    public async update(payload, id) {
        const res = await User.findOrFail(id)
        res.merge(payload)
        await res.save()
        return res
    }

    public async deleteMem(id) {
        const res = await User.findOrFail(id)
        await res.delete()
        return `deleted id : ${id}`
    }
}
