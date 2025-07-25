// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import rentRepository from "App/repository/rentRepo"
import validateRent from "App/validators/rented/validateRent"
import validateRentId from "App/validators/rented/validateRentId"
import validateId from "App/validators/user/validateId"

export default class RentedsController {
    private repo = new rentRepository()
    public async rentProp(ctx) {
        try {
            const payload = await ctx.request.validate(validateRent)
            const res = await this.repo.postProp(payload)
            return { success: true, data: res }
        } catch (err) {
            throw err
        }
    }

    public async viewRented(ctx) {
        try {
            const { id } = await ctx.request.validate(validateId)
            const res = await this.repo.showAll(id)
            return { success: true, data: res }
        }
        catch (err) {
            throw err
        }
    }

    public async removeRented(ctx) {
        try {
            const { id } = await ctx.request.validate(validateRentId)
            const res = await this.repo.removeRented(id)
            return { success: true, data: res }
        }
        catch (err) {
            throw err
        }
    }
}
