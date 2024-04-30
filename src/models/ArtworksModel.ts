export interface ArtworksModel {
    artObjects: ArtObject[]
}

export interface ArtObject {
    links: Links
    id: string
    objectNumber: string
    title: string
    principalOrFirstMaker: string
    webImage?: WebImage
}

export interface Links {
    self: string
}

export interface WebImage {
    url: string
}