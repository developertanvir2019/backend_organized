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


export interface IUserMethods {
    fullname(): string
}