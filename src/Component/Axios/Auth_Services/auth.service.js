import AxiosHandle from '../AxiosHandle'

export const auth = async (payload) => {

    try {
        console.log(payload);
        const data = JSON.stringify(payload);
        const response = await AxiosHandle.post('/auth/login', data)

        return response;
    } catch (error) {
        return Promise.reject(error);
    }
}