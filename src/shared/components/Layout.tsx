import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import ApplicationAppBar from "./ApplicationAppBar";

const Layout = () => {

    return (
        // user?.profile ?
            <Box dir="rtl" sx={{display: "flex", flexDirection: "column", width: "100%", height: "100vh"}}>
                <ApplicationAppBar />
                <Box sx={{position: "fixed", top: "3.8rem", bottom: "3.8rem", left: "0", right: "0", overflowY: "auto"}}>
                    <Outlet />
                </Box>
                {/* <BottomNavigation/> */}
                {/* <MapModal /> */}
            </Box>
            // :
            // <Navigate to="/login" />
    )
}

export default Layout;