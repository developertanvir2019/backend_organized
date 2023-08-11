import { User } from "./user.model"

const createUserToDB = async () => {
    const user = new User({
        id: "string",
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
    })
}