import axios from 'axios';
import { useContext, useEffect } from 'react';

const axiosSecure = axios.create({
    baseURL: 'https://photography-campus-server.vercel.app'
})

const useAxiosSecure = () => {

    useEffect(() => {
        //interceptors for request
        axiosSecure.interceptors.request.use(config => {
            const token = localStorage.getItem('access-token')
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        })

        //interceptors for request
        axiosSecure.interceptors.response.use(response => response,
            async error => {
                if (error.response && error.response.status === 401 || error.response.status === 403) {
                    await logOut()
                    // router.push('/login')
                    alter('login')
                }
                return Promise.reject(error)
            })
    }, [axiosSecure])

    return [axiosSecure]
}
export default useAxiosSecure