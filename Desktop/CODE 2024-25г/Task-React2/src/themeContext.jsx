// import { createContext, useState, useContext } from 'react';
// import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

// export const ThemeContext = createContext();

// export const useThemeContext = () => {
//     const context = useContext(ThemeContext);
//     if (!context) {
//         throw new Error('useThemeContext must be used within a ThemeProvider');
//     }
//     return context;
// };

// export function CustomThemeProvider({ children }) {
//     const [themeMode, setThemeMode] = useState('light')

//     const toggleThemes = () => {
//         setThemeMode((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
//     }

//     const theme = createTheme({
//         palette: {
//           mode: themeMode, 
//         },
//       });
    
//     return (
//         <ThemeContext.Provider value={{themeMode, toggleThemes}}>
//             <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
//         </ThemeContext.Provider>
//     )
// } 

