import axios from "axios"

export default class CardPostService {
    static async getAll(limit: number = 15) {
        const response = await axios.get('https://api.spacexdata.com/v3/ships', {
            params: {
                limit: limit,
            }
        })
        console.log(response.data)
        return response
    }
}