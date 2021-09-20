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