// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import propRepository from "App/repository/propRepo"
import validateProp from "App/validators/property/validateProp"
import validateUpdate from "App/validators/property/validateUpdate"
import validateId from "App/validators/user/validateId"

export default class PropertiesController {
    private repo = new propRepository()
    public async showAll() {

        try {
            const res = await this.repo.showAll()
            return { success: true, data: res }
        }
        catch (err) {
            return { success: false, message: err }
        }

    } public async postProp(ctx) {
        try {

            const payload = await ctx.request.validate(validateProp)

            const res = await this.repo.postProp(payload)

            return { success: true, data: res }
        }
        catch (err) {
            return { success: false, message: err }
        }

    }

    public async updateProp(ctx) {
        try {

            const payload = await ctx.request.validate(validateUpdate)

            const { id } = await ctx.request.validate(validateId)

            const res = await this.repo.updateProp(payload, id)

            return { success: true, data: res }
        }
        catch (err) {
            return { success: false, message: err }
        }

    } public async deleteProp(ctx) {

        try {

            const { id } = await ctx.request.validate(validateId)

            const res = await this.repo.deleteProp(id)

            return { success: true, data: res }
        }
        catch (err) {
            return { success: false, message: err }
        }

    }
}
