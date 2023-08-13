import { User } from "./user.model"

export const createUserToDB = async () => {
    const user = new User({
        id: "1028",
        role: "student",
        password: 'string',
        name: {
            firsName: 'string',
            middleName: 'string',
            lastName: 'string',
        },
        dateOfBirth: 'string',
        gender: "male",
        email: 'string',
        contactNo: 'string',
        emergencyContactNo: 'string',
        presentAddress: 'string',
        permanentAddress: 'string',
    });
    await user.save();
    return user
}