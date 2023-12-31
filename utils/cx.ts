import { isString } from "lodash";
import { twMerge } from "tailwind-merge";

const cx = (...args: Array<string | { [key: string]: unknown }>) => {
    const classNames = args
        .filter(Boolean)
        .map((item) => {
            if (isString(item)) {
                return item;
            }

            return Object.keys(item)
                .map((key) => item[key])
                .join(" ");
        })
        .join(" ");

    return twMerge(classNames);
};

export default cx;
