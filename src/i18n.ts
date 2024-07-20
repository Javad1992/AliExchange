import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getStorageValue } from './utils/localstorage';

const resources = {
    en: {
        translation: {
            "AppName": "AliExchanges CO",
            "Home": "Home",
            "Wallet": "Wallet",
            "Logout": "Logout",
            "Settings": "Settings",
            "ChooseYourLanguage": "Choose your language",
            "Hamster": "Hamster",
            "Next": "next",
            "Back": "back",
            "Cancel": "cancel"
        }
    },
    fa: {
        translation: {
            "AppName": "AliExchanges CO",
            "Home": "خانه",
            "Wallet": "کیف پول",
            "Logout": "خروج از حساب",
            "Settings": "تنظمیات",
            "ChooseYourLanguage": "زبان خود را انتخاب کنید",
            "Hamster": "همستر",
            "Next": "مرحله بعد",
            "Back": "مرحله قبل",
            "Cancel": "انصراف"
        }
    }
}

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init(
    {
        lng: getStorageValue<string>('lang') || 'en',
        resources,
        fallbackLng: 'en',
        // debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });

export default i18n;


// 10:30 2:30
// 15:06 16:16
// 19:30 21:10
// 21:40 22:30
// 20:02 