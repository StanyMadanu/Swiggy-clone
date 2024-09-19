import { createContext } from "react";

const UserContext = createContext({
  loginUser: "Default User",
});

export default UserContext;
