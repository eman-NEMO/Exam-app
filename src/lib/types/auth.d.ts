import { User } from "next-auth";


declare type ApplicationUser={
    "_id": string,
    "username": string,
    "firstName": string,
    "lastName": string,
    "email": string,
    "phone":string,
    "role": string,
    "isVerified": boolean,
    "createdAt": string

}
declare type LoginResponse ={
    token:string;
    user:ApplicationUser
}