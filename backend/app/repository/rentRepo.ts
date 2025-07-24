import Rented from "App/Models/Rented";

export default class rentRepository {
    public async postProp(payload) {
        const res = await Rented.create(payload)
        return res
    }

    public async showAll(id) {
        const res = await Rented.findOrFail(id)
        return res
    }

    public async removeRented(id) {
        const res = await Rented.findOrFail(id)
        res.merge({ status: 'Inactive' })
        await res.save()
        return res
    }
}