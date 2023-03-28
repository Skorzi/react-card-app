import axios from "axios"

export default class CardPostService {
    static async getAll(limit=15, shipType='', offset=0) {
        const response = await axios.get('https://api.spacexdata.com/v3/ships', {
            params: {
                limit: limit,
                ship_type: shipType,
                offset: offset
            }
        
        })
        // console.log(response.data)

        return response
    }
}