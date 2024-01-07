import { User, UserType } from '../models/User';

const selectUserProps = ['firstName', 'lastName', 'email', 'profilePic', 'coverPic', '_id', 'connections'];

export async function getUsers() {
    const users = await User.find({}).select(selectUserProps).lean();
    return users;
}

export async function getUserById(id: string) {
    const user = await User.findById(id).select(selectUserProps).lean();
    return user;
}

export async function createUser(userData: UserType) {
    const { _id, firstName, lastName, email, profilePic, coverPic } = await User.create(userData);
    return { _id, firstName, lastName, email, profilePic, coverPic };
}

export async function getConnectionsByUserId(userId:string): Promise<any[]> {
    const user = await User.findById(userId)
    .select('connections')
    .populate("connections", ["_id", "firstName", "lastName", "profilePic"])
    .lean();

    if(user) {
        const connections = user.connections;
        return connections;
    }
    return [];
}
