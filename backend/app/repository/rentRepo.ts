import Rented from "App/Models/Rented";
import { DateTime } from "luxon";

export default class rentRepository {
    public async postProp(payload) {
        const data = {
            ...payload,
            start_date: DateTime.now()
        }
        const res = await Rented.create(data)
        return res
    }

    public async showAll(id) {
        const res = await Rented.query().where('owner_id', id)
        return res
    }

    public async removeRented(id) {
        const res = await Rented.findOrFail(id)
        res.merge({ end_date: DateTime.now(), status: 'Inactive' })
        await res.save()
        return res
    }
}