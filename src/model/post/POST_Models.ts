import { Address, GeoLocation } from "../Shelter";

type NewType = Address;

export interface POST_Shelter {
    id?: string;
    name: string;
    address: NewType;
    geoLocation: GeoLocation;
    phoneNumber: string;
    email: string;
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
