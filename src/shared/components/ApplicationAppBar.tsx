import { useState } from "react";
import { Box, AppBar, Toolbar, Avatar, IconButton, SwipeableDrawer, Typography, MenuList, MenuItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import ThemeSwitch from "./ThemeSwitch";
import { useThemeStore } from "../store/store";
import { Home, Logout, Settings, Wallet } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ApplicationAppBar: React.FC = () => {

  const { t, i18n } = useTranslation();

  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const navigate = useNavigate()

  const [open, setOpen] = useState<boolean>(false)

  const toggleDrawer = () => {
    setOpen(prev => !prev)
  }

  const goTo = (route: string) => {
    toggleDrawer()
    navigate(route)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(prev => !prev)}
          >
            <MenuIcon />
          </IconButton>
          <Box width="100%" display="flex" gap="4px" justifyContent="center" alignItems="center">
            <Typography variant="h6" fontWeight="bold" alignContent="center" textAlign="center">
              {t('AppName')}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer dir="rtl" PaperProps={{ style: { display: "flex", flexDirection: "column", gap: "48px", width: "75%", padding: "1rem", } }} anchor="right" open={open} onClose={toggleDrawer} onOpen={toggleDrawer} disableBackdropTransition={!iOS} disableDiscovery={iOS}>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "end" }}>
          <Avatar sx={{ width: "80px", height: "80px" }} alt="User avatar" src="" />
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "end"}}>
            <Typography variant="subtitle1" fontWeight="bold">
              علی احمدیان
            </Typography>
          </Box>
        </Box>
        <MenuList>
          <MenuItem onClick={() => goTo("/")}>
            <ListItemIcon>
              <Home fontSize="small" />
            </ListItemIcon>
            <ListItemText>{t('Home')}</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Wallet fontSize="small" />
            </ListItemIcon>
            <ListItemText>{t('Wallet')}</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            <ListItemText>{t('Logout')}</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => goTo("/settings")}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            <ListItemText>{t('Settings')}</ListItemText>
          </MenuItem>
        </MenuList>
        <ThemeSwitch sx={{ marginTop: "auto", alignSelf: "center" }} checked={useThemeStore.getState().theme === 'dark'} onChange={useThemeStore.getState().toggleTheme} />
      </SwipeableDrawer>
    </Box>
  )
}

export default ApplicationAppBar;