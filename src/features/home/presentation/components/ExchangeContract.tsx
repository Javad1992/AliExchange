import { Box, Typography } from "@mui/material";

const ExchangeContract = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", padding: "1rem", justifyContent: "center", alignItems: "center" }}>
            <Typography fontSize="large" fontWeight="bold" textAlign="center"><a href="#/contract" target="_blank">متن قرارداد </a>را مطالعه کردم و آماده فروش توکن همستر خود از الان بصورت پیش فروش می باشم</Typography>
        </Box>
    )
}

export default ExchangeContract;