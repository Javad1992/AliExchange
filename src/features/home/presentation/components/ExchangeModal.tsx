import { Box, Button, Modal } from "@mui/material"
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getStorageValue } from "../../../../utils/localstorage";
import ExchangeCalculator from "./ExchangeCalculator";
import ExchangeContract from "./ExchangeContract";
import ExchangeStart from "./ExchangeStart";
import SelectWallet from "./SelectWallet";

interface ExchangeModalProps {
    open: boolean
    onClose: () => void
}

interface Step {
    id: number
    component: React.ReactElement
    back: number
    next: number
}

const steps: Step[] = [
    {
        id: 0,
        component: <ExchangeStart/>,
        back: -1,
        next: 1 
    },
    {
        id: 1,
        component: <ExchangeCalculator/>,
        back: 0,
        next: 2
    },
    {
        id: 2,
        component: <ExchangeContract/>,
        back: 1,
        next: 3
    },
    {
        id: 3,
        component: <SelectWallet/>,
        back: 2,
        next: 4
    },
]

const ExchangeModal = ({ open, onClose }: ExchangeModalProps) => {

    const { t } = useTranslation();
    const [step, setStep] = useState<Step>(steps[0])

    return (
        <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={{ position: "relative", width: "100%", height: "100%", maxHeight: "100vh", padding: "0", borderRadius: "0" }}>
                <Box sx={{ position: "absolute", display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", bottom: "1rem", left: "0", right: "0", padding: "1rem", zIndex: "10" }}>
                    <Button variant="contained" color="error" onClick={() => step.id === 0 ? onClose() : setStep(steps[step.back])}>
                        {step.id === 0 ? t("Cnacel") : t("Back")}
                    </Button>
                    <Button variant="contained" color="success" onClick={() => setStep(steps[step.next])}>
                        {t("Next")}
                    </Button>
                </Box>
                <Box sx={{ position: "absolute", bottom: "0", left: "0", right: "0", top: "0", backgroundColor: getStorageValue("theme") === "light" ? "#FAFAFA" : "#03030" }}>
                    {step.component}
                </Box>
            </Box>
        </Modal>

    )
}

export default ExchangeModal