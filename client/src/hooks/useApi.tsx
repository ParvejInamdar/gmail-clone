import React, { useState } from 'react';
import API_GMAIL_CLONE from "../Services/api.ts";

const useApi = (urlObject) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    console.log("UseAPI",urlObject)
    const call = async (payload) => {
        setResponse(null);
        setError("");
        setIsLoading(true);
        try {
            let res = await API_GMAIL_CLONE(urlObject,payload);
            setResponse(res.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return { call, response, error, isLoading };
}

export default useApi;