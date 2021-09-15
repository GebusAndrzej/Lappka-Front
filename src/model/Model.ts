export interface Shelter {
    id: string;
    name: string;
    address: Address;
    geoLocation: GeoLocation;
    phoneNumber: string;
    email: string;
    photoId?: string;
    bankNumber: string;
}

export interface Pet {
    id?: string;
    name: string;
    sex: number;
    race: string;
    species: string;
    mainPhotoId: string;
    birthDay: Date;
    shelterAddress: Address;
}

export interface Address {
    street: string;
    zipCode: string;
    city: string;
}

export interface GeoLocation {
    latitude: string;
    longitude: string;
}
