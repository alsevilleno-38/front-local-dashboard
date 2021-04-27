import React, { useState, useCallback } from "react";
import axios from "axios";

const useHttp = (options, cb = null) => {
    const [students, setStudents] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const sendRequest = useCallback(async () => {
        setIsLoading(true);
        const reponse = await axios.get(options.url);
        setStudents(reponse.data);
        setIsLoading(false);
        setIsLoaded(true);
    }, [options, cb]);

    if (cb) {
        db();
    }
    return {
        students,
        isLoaded,
        isLoading,
        sendRequest
    }
};

export default useHttp;