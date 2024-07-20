import { Box, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import i18next from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getStorageValue, setStorageValue } from "../../utils/localstorage";

const Settings = () => {
    const { t } = useTranslation();

    const [value, setValue] = useState(getStorageValue<string>('lang') || 'en')

    useEffect(() => {
        i18next.changeLanguage(value, (err, t) => {
            // if (err) return console.log('something went wrong loading', err);
            // t('key'); // -> same as i18next.t
        });
        setStorageValue("lang", value)
    }, [value])

    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "start", width: "100%", height: "100%", padding: "1rem"}}>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem" }}>
                <Typography>{t("ChooseYourLanguage")}</Typography>
                <Select
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                >
                    <MenuItem value="ar">العربیه</MenuItem>
                    <MenuItem value="or">اردو</MenuItem>
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="fa">فارسی</MenuItem>
                    <MenuItem value="tr">Turkce</MenuItem>
                </Select>
            </Box>
        </Box>
    )
}

export default Settings;