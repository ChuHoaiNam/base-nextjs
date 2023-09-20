"use client";

import { createContext } from "react";

export interface ITranslationContext {
    t: (key: string) => string;
}

const TranslationContext = createContext<ITranslationContext>({
    t: (key) => key,
});

export default TranslationContext;
