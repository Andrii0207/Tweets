import { useEffect } from "react";
import { getUsers } from "../service/operations";

export const Home = () => {
  useEffect(() => {
    getUsers();
  }, []);

  return <div>Welcome!</div>;
};
