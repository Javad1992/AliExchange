import { create } from 'zustand'
import { getStorageValue } from '../../utils/localstorage'

export interface ThemeStore {
  theme: "dark" | "light"
  toggleTheme: () => void
}

export interface ExchangeStore {
  numberOfcoins: number
  walletAddress: string
  bankCard: string
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: getStorageValue("theme") || 'light',
  toggleTheme: () => {
    return set((state) => {
      return ({ theme: state.theme === "light" ? "dark" : "light" })
    })
  }
}))

export const useExchangeStore = create<ExchangeStore>((set) => ({
  numberOfcoins: 0,
  walletAddress: "",
  bankCard: ""
}))