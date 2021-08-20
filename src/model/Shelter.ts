export interface Shelter {
    id?: string;
    name: string;
    address: Address;
    geoLocation: GeoLocation;
    phoneNumber: string;
    email: string;
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
