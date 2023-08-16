import { Model } from "mongoose";

export interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
        firsName: string;
        middleName?: string;
        lastName: string;
    };
    dateOfBirth: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
}



interface UserModel extends Model<IUser> {
    getAdminUser(): IUser[];
}
export interface IUserMethods {
    fullName(): string
}
