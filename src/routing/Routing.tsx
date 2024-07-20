import { CssBaseline, ThemeProvider } from "@mui/material"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../features/home/presentation/pages/Home"
import Contract from "../shared/components/Contract"
import Layout from "../shared/components/Layout"
import Settings from "../shared/components/Settings"
import { useThemeStore } from "../shared/store/store"
import { darkTheme, lightTheme } from "../shared/theme/themes"
import { setStorageValue } from "../utils/localstorage"

const Routing = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                staleTime: 60 * 1000,
                retry: 1,
            },
        },
    })

    const theme = useThemeStore((state) => state.theme)

    useEffect(() => {
        setStorageValue("theme", theme)
    }, [theme])

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <CssBaseline />
            <QueryClientProvider client={queryClient}>
                {/* <ToastContainer limit={1} closeOnClick /> */}
                <BrowserRouter>
                    <Routes>
                        {/* <Route path={"/login"} element={<LoginPage />}/> */}
                        <Route path={"/"} element={<Layout />}>
                            <Route index element={<Home />}></Route>
                            <Route path={"/settings"} element={<Settings />}></Route>
                        </Route>
                        <Route path={"/contract"} element={<Contract />}></Route>
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </ThemeProvider>
    )
}

export default Routing;