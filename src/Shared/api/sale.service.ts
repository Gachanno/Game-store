import axios from "axios"
import { ISaleGame } from "../types/types"

class SaleService {

    private URL = 'http://localhost:3000/gameOnSale'

    async getSaleGame(){
        const { data } = await axios.get<ISaleGame[]>(this.URL)
        return data
    }
}

export const saleService = new SaleService()