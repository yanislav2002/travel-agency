const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            'content-type': 'application/json' 
        };
    }

    return options;
};

export const request = async (method, url, data) => {
    const response = await fetch(url, {
        ...buildOptions(data),
        method,
    });
    
    if (response.status == 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok){
        throw result;
    }

    return result;
};