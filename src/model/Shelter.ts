export interface Shelter {
    id?: string;
    name: string;
    address: Address;
    geoLocation: GeoLocation;
    phoneNumber: string;
    email: string;
}

export interface Pet {
    id?: string;
    name: string;
    sex: number;
    mainPhotoPath: string;
    race: string;
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
