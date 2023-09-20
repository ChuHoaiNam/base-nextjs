"use client";

import useTranslation from "@/i18n/useTranslation/client";
import changeLanguage from "@/i18n/utils/changeLanguage";
import { i18n } from "@/i18n/utils/config";
import { usePathname, useRouter } from "next/navigation";

export default function LocaleSwitcher() {
    const router = useRouter();
    const pathName = usePathname();
    const redirectedPathName = (locale: string) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = locale;
        return segments.join("/");
    };
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t("welcome")}</h1>
            <p>Locale switcher:</p>
            <ul>
                {i18n.locales.map((locale) => {
                    return (
                        <li key={locale}>
                            <button
                                onClick={() => {
                                    changeLanguage(locale).then(() => {
                                        router.replace(
                                            redirectedPathName(locale),
                                        );
                                    });
                                }}
                            >
                                {locale}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
