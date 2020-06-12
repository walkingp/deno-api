import Users from "../models/user.ts";

const getAllUsers = ({ response }: { response: any }) => {
  response.body = Users;
};

export { getAllUsers };
