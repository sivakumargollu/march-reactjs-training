import React, { JSX, useState }  from "react";

export type ThemeState = {
    mode: string;
}

const initialState: ThemeState = {
    mode: "dark",
}
export const AppThemeContext = React.createContext(initialState);

export function AppThemeContextProvider({children}:{children: JSX.Element}) {
    const [mode,setMode] = useState(initialState.mode)
    return (
        <AppThemeContext.Provider value={initialState} >
            {children}
        </AppThemeContext.Provider>
    )
}