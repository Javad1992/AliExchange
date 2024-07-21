import { Box, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useExchangeStore } from "../../../../shared/store/store";

const ExchangeDetailsAndContractConfirmation = () => {
    const { t } = useTranslation();
    const { numberOfcoins, walletAddress, bankCard } = useExchangeStore(state => state)
    return (
        <Box overflow="auto" sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", padding: "1rem", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
            <Typography fontWeight="bold">اینجانب</Typography>
            <TextField size="small" dir="rtl" placeholder="نام"></TextField>
            <TextField size="small" dir="rtl" placeholder="نام خانوادگی"></TextField>
            <Typography fontWeight="bold">با شماره موبایل</Typography>
            <TextField size="small" placeholder="091********"></TextField>
            <Typography fontWeight="bold">و آی دی تلگرام</Typography>
            <TextField size="small" placeholder="@exampleId"></TextField>
            <Typography fontSize="large" fontWeight="bold" textAlign="center"><a href="#/contract" target="_blank">متن قرارداد </a>را مطالعه کردم و مبادله به شرح زیر را تایید می نمایم</Typography>
            <Box display="flex" flexDirection="column" gap="0.2rem" justifyContent="center" alignItems="center">
                <Typography>تعداد توکن مورد معامله</Typography>
                <Typography>{numberOfcoins}</Typography>
            </Box>
            <Box display="flex" flexDirection="column" gap="0.2rem" justifyContent="center" alignItems="center" >
                <Typography>{t("Wallet")}</Typography>
                <Typography>{walletAddress}</Typography>
            </Box>
            <Box display="flex" flexDirection="column" gap="0.2rem" justifyContent="center" alignItems="center">
                <Typography>کارت بانکی</Typography>
                <Typography>{bankCard}</Typography>
            </Box>
        </Box>
    )
}

export default ExchangeDetailsAndContractConfirmation;