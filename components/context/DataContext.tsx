import { createContext } from "react";
import { DataContextType } from "../../types/contextTypes";

const DataContext = createContext<DataContextType | undefined>(undefined);

export default DataContext;
