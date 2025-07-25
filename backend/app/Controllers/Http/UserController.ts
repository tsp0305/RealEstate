import UserRepository from "App/repository/userRepo"
import validateUser from "App/validators/user/validateUser"
import validateLogin from "App/validators/user/validateLogin"
import validateUpdate from 'App/validators/user/validateUpdate'
import validateId from 'App/validators/user/validateId'

export default class UserController {

    private repo = new UserRepository()

    public async showAll() {
        try {
            const res = await this.repo.show()
            return { success: true, data: res }
        }
        catch (err) {
            throw err
        }
    }

    public async signUp(ctx) {
        try {
            const payload = await ctx.request.validate(validateUser)
            const res = await this.repo.signUp(payload)
            return { success: true, data: res }
        }
        catch (err) {
            console.log(err)
        }

    }

    public async login(ctx) {
        try {
            const payload = await ctx.request.validate(validateLogin)
            const { auth } = ctx
            const { token, data } = await this.repo.login(payload, auth)

            return {
                success: true,
                token,
                user: data.serialize ? data.serialize() : data
            }
        } catch (err) {
            console.log(err)
            throw err
        }
    }

    public async me(ctx) {
        try {
            const user = ctx.auth.user
            return { success: true, user }
        }
        catch (err) {
            throw err
        }
    }

    public async logout(ctx) {
        try {
            await ctx.auth.logout()
            return { success: true, message: 'Logged out' }
        }
        catch (err) {
            throw err
        }
    }

    public async update(ctx) {
        try {

            const payload = await ctx.request.validate(validateUpdate)
            const id = await ctx.request.validate(validateId)
            const res = await this.repo.update(payload, id.id)
            return { success: true, data: res }
        }
        catch (err) {
            throw err
        }
    }

    public async delete(ctx) {

        try {
            const id = await ctx.request.validate(validateId)
            const res = await this.repo.deleteMem(id.id)
            return { success: true, data: res }
        }
        catch (err) {
            return { success: false, message: err }
        }

    }

}
