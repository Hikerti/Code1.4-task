import { useState } from "react";

export default function useFetch(callback) {
    const [isPost, setIsPost] = useState(false);
    const [error, setError] = useState('');

    const FetchPostData = async () => {
        try {
            setIsPost(true);
            await callback();
        } catch(e) {
            setError(e)
        } finally {
            setIsPost(false)
        }
    }

    return [FetchPostData, isPost, error]
}

