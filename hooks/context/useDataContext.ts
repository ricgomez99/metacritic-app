import { useContext } from "react";
import DataContext from "../../components/context/DataContext";

export default function useDataContext() {
  const data = useContext(DataContext);
  const error = () => {
    throw new Error("useDataContext should be used with the correct context");
  };

  return data === undefined ? error() : data;
}
