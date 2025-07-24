import Notification from "@ioc:Verful/Notification"
import Pay from "App/Mailers/Pay"
import Payment from "App/Models/Payment"
import Rented from "App/Models/Rented"
import User from "App/Models/User"
import { DateTime } from "luxon"

export default class payRepository {
    public async remind(payload) {
        const { id } = payload
        const rent = await Rented.find(id)
        const { amount, tent_id } = rent
        const data = {
            rent_id: id,
            due_date: DateTime.now().plus({ days: 5 }),
            amount: amount,
            status: 'pending'
        }
        const res = await Payment.create(data)
        const user = await User.find(tent_id)
        await new Pay(user).send()
        return res
    }

    public async paid(payload) {
        const { id } = payload
        const pay = await Payment.find(id)
        pay.pay_date = DateTime.now()
        pay.status = 'paid'
        const res = await pay?.save()
        return res
    }
}