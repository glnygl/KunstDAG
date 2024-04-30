import { WebImage } from "./ArtworksModel"


export interface ArtworkDetailModel {
    artObject: ArtObjectDetail
}

export interface ArtObjectDetail {
    id: string
    objectNumber: string
    language: string
    title: string
    webImage?: WebImage
    plaqueDescriptionDutch: string
    plaqueDescriptionEnglish: string
    principalMaker: string
    dating: Dating
}

export interface Dating {
    presentingDate: string
}