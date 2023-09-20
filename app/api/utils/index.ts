const getFormData = async (request: Request): Promise<any> => {
    let formData = null;
    let jsonData = null;
    try {
        formData = await request.formData();
    } catch (err) {}

    try {
        jsonData = await request.json();
    } catch (err) {}

    return jsonData || formData;
};

export default getFormData;

const isFormData = (body: any) => body instanceof FormData;

export const buildConfig = async (request: Request): Promise<RequestInit> => {
    const body = await getFormData(request);

    const config: RequestInit = {};
    if (body) {
        if (isFormData(body)) {
            config.body = body;
        } else {
            config.body = body;
            config.headers = {
                "Content-Type": "Application/json",
            };
        }
    }

    return config;
};
