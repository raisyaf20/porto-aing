import React from "react";
import { DefaultTheme } from "../utils/theme";

export const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = React.useState(DefaultTheme());
    const toggleTheme = React.useCallback(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }, [theme]);
    React.useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;