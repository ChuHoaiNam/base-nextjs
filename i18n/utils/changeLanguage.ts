import Cookies from "js-cookie";

import type { Locale } from "@/i18n/utils/config";
import { COOKIE_KEYS } from "../constants";

const changeLanguage = (locale: Locale) => {
    return new Promise((resolve) => {
        Cookies.set(COOKIE_KEYS.I18N, locale);

        resolve(locale);
    });
};

export default changeLanguage;
