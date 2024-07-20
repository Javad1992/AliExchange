import { Add, PlusOneRounded, WalletRounded } from "@mui/icons-material";
import { Box, Button, Modal, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useExchangeStore } from "../../../../shared/store/store";
import { getStorageValue } from "../../../../utils/localstorage";

const SelectWallet = () => {

    // this is mock and it comes from server (wallets of user)
    const [walletAddresses, setWalletAddresses] = useState(["5eteg6hu6765_t464rt-64rtr68Ufe", "JKF98_hu6765t464rt-6yjn68Ufe"])
    const [openAddWallet, setOpenAddWallet] = useState(false)
    const [newWallet, setNewWallet] = useState("")

    const selectedWallet = useExchangeStore(state => state.walletAddress)

    const selectThis = (walletAddress: string) => {
        useExchangeStore.setState(state => ({...state, walletAddress: walletAddress}))
    }

    const addThis = () => {
        setWalletAddresses(prev => [...prev, newWallet])
        setOpenAddWallet(false)
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", padding: "1rem", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
            <Typography fontSize="large" fontWeight="bold" sx={{ marginBottom: "1rem" }}>لطفا کیف پول مقصد را انتخاب کنید</Typography>
            {walletAddresses.map(walletAddress => <Paper elevation={selectedWallet === walletAddress ? 5 : 2} sx={{ display: "flex", gap: "0.5rem", padding: '1rem' }} onClick={() => selectThis(walletAddress)}>
                <WalletRounded />
                <Typography>{walletAddress}</Typography>
            </Paper>)}
            <Button variant="contained" color="success" onClick={() => setOpenAddWallet(true)}>افزودن کیف پول<Add/></Button>
            <Modal sx={{display: "flex", justifyContent: "center", alignItems: "center"}} open={openAddWallet} onClose={() => setOpenAddWallet(false)}>
                <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", width:"80%", borderRadius: "1rem", padding: "1rem", backgroundColor: getStorageValue("theme") === "light" ? "#FAFAFA" : "#03030"}}>
                    <Typography fontSize="medium" fontWeight="bold">لطفا آدرس کیف پول خودتان را اینجا کپی کنید</Typography>
                    <TextField value={newWallet} onChange={(e)=> setNewWallet(e.target.value)}></TextField>
                    <Button variant="contained" color="success" onClick={addThis}>ثبت</Button>
                </Box>
            </Modal>
        </Box>
    )
}

export default SelectWallet;