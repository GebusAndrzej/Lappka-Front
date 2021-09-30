import { User } from "../features/auth/authSlice";

export interface Shelter {
    id: string;
    name: string;
    address: Address;
    geoLocation: GeoLocation;
    phoneNumber: string;
    email: string;
    photoPath?: string;
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
    mainPhotoPath: string;
    photoPaths: string[];
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
    shelter: Shelter;
    user: User;
    status: number;
    creationDate: Date;
}

export interface Message {
    id: string;
    userId: string;
    shelterId: string;
    description: string;
    fullName: string;
    phoneNumber: string;
    createdAt: Date;
    isRead: boolean
}