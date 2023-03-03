import { Box, ThemeProvider } from "@mui/material";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { DarkTheme } from "../dark";
import { LightTheme } from "../light";

interface IThemeContextData {
    themeName: 'light' | 'Dark';
    toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const UiProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [themeName, setThemeName] = useState<'light' | 'Dark'>('light');

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'Dark' : 'light')
    }, [])

    const theme = useMemo(() => {
        if (themeName === 'light') return LightTheme;
        return DarkTheme
    }, [themeName])
    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}