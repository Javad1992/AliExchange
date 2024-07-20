import { Add, PlusOneRounded, WalletRounded } from "@mui/icons-material";
import { Box, Button, Modal, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useExchangeStore } from "../../../../shared/store/store";
import { getStorageValue } from "../../../../utils/localstorage";

const SelectBankCard = () => {

    // this is mock and it comes from server (cards of user)
    const [bankCards, setBankCards] = useState(["6037-6616-8596-8754", "9980-1052-3365-9856"])
    const [openAddBankCard, setOpenAddBankCard] = useState(false)
    const [newBankCard, setNewBankCard] = useState("")

    const selectedBankCard = useExchangeStore(state => state.bankCard)

    const selectThis = (bankCard: string) => {
        useExchangeStore.setState(state => ({...state, bankCard: bankCard}))
    }

    const addThis = () => {
        setBankCards(prev => [...prev, newBankCard])
        setOpenAddBankCard(false)
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", padding: "1rem", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
            <Typography fontSize="large" fontWeight="bold" sx={{ marginBottom: "1rem" }}>لطفا کارت بانکی مد نظر را انتخاب کنید</Typography>
            {bankCards.map(bankCard => <Paper elevation={selectedBankCard === bankCard ? 5 : 2} sx={{ display: "flex", gap: "0.5rem", padding: '1rem' }} onClick={() => selectThis(bankCard)}>
                <WalletRounded />
                <Typography>{bankCard}</Typography>
            </Paper>)}
            <Button variant="contained" color="success" onClick={() => setOpenAddBankCard(true)}>افزودن کارت بانکی<Add/></Button>
            <Modal sx={{display: "flex", justifyContent: "center", alignItems: "center"}} open={openAddBankCard} onClose={() => setOpenAddBankCard(false)}>
                <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", width:"80%", borderRadius: "1rem", padding: "1rem", backgroundColor: getStorageValue("theme") === "light" ? "#FAFAFA" : "#03030"}}>
                    <Typography fontSize="medium" fontWeight="bold">لطفا شماره کارت عابر بانکی که مورد تایید ما است را اینجا وارد کنید</Typography>
                    <TextField value={newBankCard} onChange={(e)=> setNewBankCard(e.target.value)}></TextField>
                    <Button variant="contained" color="success" onClick={addThis}>ثبت</Button>
                </Box>
            </Modal>
        </Box>
    )
}

export default SelectBankCard;