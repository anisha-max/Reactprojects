import { useContext ,  createContext  } from "react";

export const ThemeContext = createContext({
     theme : "light",
    darkMode : () =>{}, 
    lightMode: ()=>{}
})

export const ThemeProvider = ThemeContext.Provider

//coustom hook to only import one to get both themeProvider and ThemeContext

export default function useTheme(){
    return useContext(ThemeContext)
}