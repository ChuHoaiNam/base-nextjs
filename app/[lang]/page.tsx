import LocaleSwitcher from "@/components/SwitchLocale";
import useTranslationServer from "@/i18n/useTranslation/server";
import type { Locale } from "@/i18n/utils/config";

export default async function Home({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { t } = await useTranslationServer(lang);

    return (
        <main>
            <LocaleSwitcher />
            <p>Current locale: {lang}</p>
            <p>This text is rendered on the server: {t("welcome")}</p>
        </main>
    );
}
