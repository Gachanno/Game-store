import axios from "axios"
import { IHighlights } from "../types/types"

class HighlightsService {

    private URL = 'http://localhost:3000/highlights'

    async getHighlights(){
        const { data } = await axios.get<IHighlights[]>(this.URL)
        return data
    }

    async getWhitelistHighlights( id:string ){
        const { data } = await axios.get<IHighlights>(`${this.URL}/${id}`)
        return data.whitelist
    }

    async editWhitelistHighlights( id:string){
        const { data } = await axios.get<IHighlights>(`${this.URL}/${id}`)
        data.whitelist = !data.whitelist
        await axios.patch(`${this.URL}/${id}`, data)
    }
    
}

export const highlightsService = new HighlightsService()