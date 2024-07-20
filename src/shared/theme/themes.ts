import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#F5F5F5',
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            default: "#FAFAFA"
        }
    },
    typography: {
        fontFamily: 'IRANSansX'
    },
    components: {
        MuiBottomNavigationAction: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: '#dc004e', // Color for selected item in light mode
                      },
                }
            }
        }
    }
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#212121',
        },
        secondary: {
            main: '#f48fb1',
        },
        background: {
            default: "#303030"
        }
    },
    typography: {
        fontFamily: 'IRANSansX'
    },
    components: {
        MuiBottomNavigationAction: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: '#dc004e', // Color for selected item in light mode
                      },
                }
            }
        }
    }
});

export { lightTheme, darkTheme };