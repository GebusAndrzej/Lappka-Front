import { Address, GeoLocation } from "../Model";

export interface PATCH_Shelter {
    id?: string;
    name: string;
    address: Address;
    geoLocation: GeoLocation;
    email: string;
    phoneNumber: string;
    bankNumber: string;
}

export interface PATCH_Pet {
    id: string;
    Name: string;
    Race: string;
    Species: number;
    Sex: number;
    DateOfBirth: Date;
    Description: string;
    ShelterId: string;
    ShelterAddress: Address;
    Sterilization: boolean;
    Weight: number;
    Color: string;
}