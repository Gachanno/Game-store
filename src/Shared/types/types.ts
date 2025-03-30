import React from "react"

export interface IHighlights {
    id:string
    idGame:number
    nameGame:string,
    urlImage:string,
    whitelist:boolean
}

export interface ISaleGame {
    id:string
    idGame:number
    nameGame:string,
    urlImage:string,
    edition: string,
    price: string,
    priceWithoutSale: string,
    saleVale: string
}

export interface IPropsInput{
    type: React.HTMLInputTypeAttribute | undefined,
    value?: string,
    placeholder?: string
}