import { createContext, useContext } from 'react';
export const CustomContext = createContext({});
export const useCustomContext = () => {
    return useContext(CustomContext);
}