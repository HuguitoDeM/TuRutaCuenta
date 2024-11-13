import { createContext } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  fotoPerfil: string;
}

export interface Blog {
  title: string;
  img: string;
  description: string;
  userId: string;
}

export const dataContext = createContext(
  DataContextType | (undefined > undefined)
);

export const dataContext = createContext(
  DataContextType | (undefined > undefined)
);
