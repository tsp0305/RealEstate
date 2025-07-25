// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import payRepository from "App/repository/payRepo"

export default class PaymentsController {
    private repo = new payRepository()
    public async postPayment(ctx) {
        try {
            const payload = ctx.request.body()
            const res = await this.repo.remind(payload)
            return { success: true, data: res }
        }
        catch (err) {
            throw err
        }

    }

    public async updatePay(ctx) {
        try {
            const payload = ctx.request.body
            const res = await this.repo.remind(payload)

            return { success: true, data: res }
        }
        catch (err) {
            throw err
        }

    }
}
