import React, { useState } from "react";
import axios from "axios";

const useHttp = (payload, cb) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [students, setStudents] = useState(null);

    const sendRequest = async () => {
        setIsLoading(true);
        const response = await axios.get(`http://localhost:3000/api/${payload.resource}`);
        if (cb) {
            cb();
        }
        setStudents(response.data);
        setIsLoading(false);
        setIsLoaded(true);
    }

    return {
        isLoading,
        students,
        isLoaded,
        sendRequest
    }
}

export default useHttp;