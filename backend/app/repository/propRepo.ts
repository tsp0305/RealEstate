import Property from "App/Models/Property"

export default class propRepository {

    public async showAll() {
        const res = await Property.all()
        return res
    }

    public async showBy(id) {
        const res = await Property.query().where('owner_id', id)
        return res
    }

    public async postProp(payload) {
        const res = await Property.create(payload)
        return res
    }

    public async updateProp(payload, id) {
        const res = await Property.findOrFail(id)
        res.merge(payload)
        await res.save()
        return res
    }

    public async deleteProp(id) {
        const res = await Property.findOrFail(id)
        await res.delete()
        return `deleted id : ${id}`
    }

}