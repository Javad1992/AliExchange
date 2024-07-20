import { MoneyRounded } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ExchangeModal from "../components/ExchangeModal";


const Home = () => {

    const { t } = useTranslation();

    const [openExchangeModal, setOpenExchangeModal] = useState(false)

    const clickHandler = (id: string) => {
        switch (id) {
            case 'hamster':
                setOpenExchangeModal(true)
                break;
            default:
                break;
        }
    }

    return (
        <Box sx={{ display: "grid", rowGap: "1rem", justifyItems: "center", width: "100%", height: "100%", padding: "1rem", gridTemplateColumns: "1fr 1fr 1fr", gridGap: "1rem" }}>
            <Paper id="hamster" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "6px", width: "90px", height: "90px" }} onClick={() => clickHandler('hamster')}>
                <Box sx={{ paddingX: ".5rem", paddingTop: ".5rem" }}>
                    <img style={{ width: "3rem" }} alt="" src="/icons/hamster.png" />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} className="flex justify-center items-center">
                    <Typography>{t('Hamster')}</Typography>
                </Box>
            </Paper>
            <ExchangeModal open={openExchangeModal} onClose={() => setOpenExchangeModal(false)}/>
        </Box>
    )
}

export default Home;