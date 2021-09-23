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
    description: string;
    shelterId: string;
    shelterAddress: Address;
    distance: null;
    id: string;
    userId: string;
    name: string;
    sex: number;
    species: number;
    race: string;
    mainPhotoId: string;
    photoIds: string[];
    birthDay: Date;
    color: string;
    weight: number;
    sterilization: boolean;
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

export interface ShelterApplication {
    id: string;
    userId: string;
    shelterId: string;
    status: number;
    creationDate: Date;
}
