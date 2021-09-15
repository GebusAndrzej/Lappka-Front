import { Address, GeoLocation } from "../Model";

type NewType = Address;

export interface POST_Shelter {
    id?: string;
    name: string;
    address: NewType;
    geoLocation: GeoLocation;
    phoneNumber: string;
    email: string;
    Photo?: string;
    BankNumber?: string;
}

export interface POST_Pet {
    id?: string;
    name: string;
    sex: number;
    mainPhotoPath: string;
    race: string;
    birthDay: Date;
    shelterAddress: Address;
}

export interface POST_registerUser {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

export interface POST_login {
    email: string,
    password: string
}
