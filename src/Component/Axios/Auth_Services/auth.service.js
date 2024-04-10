import AxiosHandle from '../AxiosHandle'

export const login = async (payload) => {

    try {
        const data = JSON.stringify(payload);
        const response = await AxiosHandle.post('/auth/login', data)

        return response;
    } catch (error) {
        return Promise.reject(error);
    }
}