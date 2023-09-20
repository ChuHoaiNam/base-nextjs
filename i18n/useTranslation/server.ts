import type { Locale } from "../utils/config";
import { getDictionary } from "../utils/getDictionary";

const useTranslationServer = async (lang: Locale) => {
    const dictionary = await getDictionary(lang);

    type Key = keyof typeof dictionary;

    return {
        t: (key: Key) => dictionary[key],
    };
};

export default useTranslationServer;
