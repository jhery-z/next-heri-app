import axios from "axios";

const cancelConfig = {
    request: null,
    cancelToken: null
}

async function axiosGetCancellable(url, config) {
    if(cancelConfig.request) {
        cancelConfig.request.cancel('canceled');
    }

    cancelConfig.request = aios.cancelToken.source();
    cancelConfig.cancelToken = cancelConfig.request.token;
    Object.assign(cancelConfig, config)

    const res = await axios.get(url, cancelConfig);
    return res;
}


export {axiosGetCancellable};