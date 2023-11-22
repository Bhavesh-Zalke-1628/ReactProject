import React from "react";
import { createContext, useContext } from "react";

export const TheamContext = createContext({
    theamMode: "light",
    darkTheam: () => { },
    lightTheam: () => { },
})


export const TheamProvider = TheamContext.Provider

export default function useTheam() {
    return useContext(TheamContext)
}