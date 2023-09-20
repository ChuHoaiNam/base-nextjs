import acceptLanguage from "accept-language";
import { NextResponse } from "next/server";

import { COOKIE_KEYS } from "./i18n/constants";
import { i18n } from "./i18n/utils/config";

const languages = i18n.locales as unknown as string[];
const fallbackLng = i18n.defaultLocale;

acceptLanguage.languages(languages);

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function middleware(req: any) {
    const cookieName = COOKIE_KEYS.I18N;

    if (
        req.nextUrl.pathname.indexOf("icon") > -1 ||
        req.nextUrl.pathname.indexOf("chrome") > -1
    )
        return NextResponse.next();
    let lng;
    if (req.cookies.has(cookieName))
        lng = acceptLanguage.get(req.cookies.get(cookieName).value);
    if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
    if (!lng) lng = fallbackLng;

    // Redirect if lng in path is not supported
    if (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        !languages.some((loc: any) =>
            req.nextUrl.pathname.startsWith(`/${loc}`),
        ) &&
        !req.nextUrl.pathname.startsWith("/_next")
    ) {
        const { search } = new URL(req.url);
        return NextResponse.redirect(
            new URL(`/${lng}${req.nextUrl.pathname}${search}`, req.url),
        );
    }

    return NextResponse.next();
}
