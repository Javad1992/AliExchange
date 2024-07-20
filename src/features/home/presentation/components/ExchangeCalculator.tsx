import { Box, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useExchangeStore } from "../../../../shared/store/store";

const ExchangeCalculator = () => {
    const [hamster, setHamster] = useState<number>(0)
    const [moneyMoney, setMoneyMoney] = useState<number>(0)
    const [toman, setToman] = useState<number>(0)

    useEffect(()=> {
        useExchangeStore.setState(state => ({...state, numberOfcoins: hamster}))
        setMoneyMoney(hamster * 2)
        setToman(hamster)
    }, [hamster])
    
    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", padding: "1rem", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
            <Typography fontSize="large" fontWeight="bold" sx={{marginBottom: "1rem"}}>مقداری که می خواهید بفروشید را وارد کنید</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
                <TextField type="number" value={hamster} onChange={(e) => setHamster(Number(e.target.value))}></TextField>
                <Typography fontSize="small" fontWeight="bold">تعداد سکه بازی (کوین)</Typography>
            </Box>
            <Typography fontSize="large" fontWeight="bold">=</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
                <TextField value={moneyMoney} disabled></TextField>
                <Typography fontSize="small" fontWeight="bold">تعداد سکه بازی (کوین)</Typography>
            </Box>
            <Typography fontSize="large" fontWeight="bold">=</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
                <TextField value={toman} disabled></TextField>
                <Typography fontSize="small" fontWeight="bold">تعداد سکه بازی (کوین)</Typography>
            </Box>
        </Box>
    )
}

export default ExchangeCalculator;