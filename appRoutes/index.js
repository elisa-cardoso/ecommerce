import { Stack } from "./stack";
import { Tabs } from "./tab";
import { Context } from "../context/securityContext";
import { useContext } from "react";


export const Routes = () => {
  const { logged } = useContext(Context);
 
  return (
    <>
      {logged ? <Tabs /> : <Stack />}
    
    </>
  );
};
