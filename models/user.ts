interface IUser {
  id: string;
  name: string;
  pwd: string;
  role: number;
}

let Users: Array<IUser> = [
  {
    id: "1",
    name: "migao",
    pwd: "123456",
    role: 0,
  },
  {
    id: "2",
    name: "migao2",
    pwd: "123456",
    role: 0,
  },
];

export default Users;
