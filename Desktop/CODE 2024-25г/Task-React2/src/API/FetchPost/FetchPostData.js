import axios from "axios";

export default async function FetchPost(limit, page) {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page,
            }
        });
        return (response)
    } catch(e) {
        console.error(e)
    }

}