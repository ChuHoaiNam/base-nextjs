import { minimatch } from "minimatch";

const rules: Array<{
    url: string;
    handlers: { [key: string]: (error: any) => void };
}> = [
    {
        url: "",
        handlers: {
            500: () => {},
            404: () => {},
            403: () => {},
            401: () => {},
            400: () => {},
        },
    },
];

const errorHandle = (error: any) => {
    const url = error.response.config.url;
    const status = error.response.status;

    const checkMatchRule = rules.find((rule) => minimatch(url, rule.url));

    if (checkMatchRule) {
        const handler = checkMatchRule.handlers[status];
        handler && handler(error);
    }
};
export default errorHandle;
