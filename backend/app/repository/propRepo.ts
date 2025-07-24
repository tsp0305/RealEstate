import User from "App/Models/User"

export default class propRepository {

    public async showAll() {
        const res = await User.all()
        return res
    }

    public async postProp(payload) {
        const res = await User.create(payload)
        return res
    }

    public async updateProp(payload, id) {
        const res = await User.findOrFail(id)
        res.merge(payload)
        await res.save()
        return res
    }

    public async deleteProp(id) {
        const res = await User.findOrFail(id)
        await res.delete()
        return `deleted id : ${id}`
    }



}