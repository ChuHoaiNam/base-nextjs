import { useContext } from "react";

import TranslationContext from "../context";

const useTranslation = () => useContext(TranslationContext);

export default useTranslation;
