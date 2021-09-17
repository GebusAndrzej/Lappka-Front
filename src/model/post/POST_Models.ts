import { Address, GeoLocation } from "../Model";

export interface POST_Shelter {
    id?: string;
    name: string;
    address: Address;
    geoLocation: GeoLocation;
    phoneNumber: string;
    email: string;
    Photo?: string;
    BankNumber?: string;
}
export interface POST_Pet {
    id?: string;
    Name: string;
    Sex: string;
    Race: string;
    Species: string;
    MainPhoto: string;
    BirthDay: Date | null;
    Color: string;
    Weight: string;
    Sterilization: string;
    Description: string;
    ShelterId: string;
    address: Address & { name: string };
    geoLocation: GeoLocation;
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
