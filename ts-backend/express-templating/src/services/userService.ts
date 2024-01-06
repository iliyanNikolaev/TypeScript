import fs, { promises } from 'fs';
type User = { id: string, name: string, email: string, role: string };

const dataPath = './services/data.json';

let data: User[] = [];

try {
    const fileContent = fs.readFileSync(dataPath, 'utf-8');
    data = JSON.parse(fileContent);
} catch (error) {
    data = [];
}


export async function getList() {
    return data;
}

export async function getById(id: string) {
    return data.find(x => x.id == id);
}

export async function create(userData: { name: string, email: string, role: string}) {
    const id = (Math.random() * 9999999999).toString().slice(-3);
    const newUser = {id, ...userData};

    data.push(newUser);

    promises.writeFile(dataPath, JSON.stringify(data, null, 2));
}