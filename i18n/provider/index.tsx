"use client";

import { useMemo } from "react";

import TranslationContext, { ITranslationContext } from "../context";

interface IProps extends React.PropsWithChildren {
    dictionary: {
        [key: string]: string;
    };
}

function TranslationProvider({ children, dictionary }: IProps) {
    const values = useMemo<ITranslationContext>(() => {
        return {
            t: (key: string) => {
                return dictionary[key] || key;
            },
        };
    }, []);
    return (
        <TranslationContext.Provider value={values}>
            {children}
        </TranslationContext.Provider>
    );
}

export default TranslationProvider;
