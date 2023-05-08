import { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import { getUsers } from "../service/operations";

export const Users = () => {
  const [resp, setResp] = useState([]);

  useEffect(() => {
    getUsers().then((resp) => setResp(resp));
  }, []);

  if (!resp) {
    return null;
  }

  return (
    <div>
      <Card users={resp} />
    </div>
  );
};
