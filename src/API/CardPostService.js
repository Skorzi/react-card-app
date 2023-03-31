import axios from "axios"

export default class CardPostService {
    static async getWithParam(limit, offset=0, shipType='') {
        const response = await axios.get('https://api.spacexdata.com/v3/ships', {
            params: {
                limit: limit,
                ship_type: shipType,
                offset: offset
            }
        
        })
        return response
    }

    static async getAll(){
        const response = await axios.get('https://api.spacexdata.com/v3/ships')
        // console.log(response)
        return response
    }
    //Для входа на карточку надо получать один объект
}