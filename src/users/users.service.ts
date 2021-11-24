import { Injectable } from '@nestjs/common';

export type User ={
    id: number,
    name: string,
    username: string,
    password: string
}
@Injectable()
export class UsersService {
    private readonly users: User[] =[{
        id: 1,
        name: "first",
        username: "firstUname",
        password: "firstPassword"
    },
    {
        id: 2,
        name: "second",
        username: "secondUname",
        password: "secondPassword"
    }
    ]

    //normál esetben, amikor passwordokkel játszunk, akkor bcrypt.js-t használunk. Itt csak a példa kedvéért nem bonyolítjuk.
    async findOne(username:string): Promise<User |undefined> {
        return this.users.find(user => user.username === username);
    } 
}
