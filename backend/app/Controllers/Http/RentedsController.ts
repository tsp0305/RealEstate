// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import rentRepository from "App/repository/rentRepo"

export default class RentedsController {
    private repo = new rentRepository()
    public async rentProp(ctx) {
        try {
            const payload = await ctx.request.body
            const res = await this.repo.postProp(payload)
            return { success: true, data: res }
        } catch (err) {
            throw err
        }
    }

    public async viewRented(ctx) {
        try {
            const id = await ctx.request.params
            const res = await this.repo.showAll(id)
            return { success: true, data: res }
        }
        catch (err) {
            throw err
        }
    }

    public async removeRented(ctx) {
        try {
            const id = await ctx.request.params
            const res = await this.repo.removeRented(id)
            return { success: true, data: res }
        }
        catch (err) {
            throw err
        }
    }
}
