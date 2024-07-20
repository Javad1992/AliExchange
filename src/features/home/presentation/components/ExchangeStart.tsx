import { Box, Typography } from "@mui/material";

const ExchangeStart = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", padding: "1rem", justifyContent: "center", alignItems: "center" }}>
            <Typography fontSize="large" fontWeight="bold">آیا می خواهید همستر خود را بفروشید؟</Typography>
            <Typography fontSize="medium">منظور فروش کوین بازی همستر کامبت است</Typography>
        </Box>
    )
}

export default ExchangeStart;