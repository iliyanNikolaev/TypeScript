import { useEffect, useState } from "react";

interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

const getData: () => Promise<IPost[]> = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export const Dashboard = () => {

    const [posts, setPosts] = useState<IPost[]>([]);
    const [error, setError] = useState<boolean | string>(false);

    useEffect(() => {
        getData()
            .then(data => setPosts(data))
            .catch(err => setError(err.message));
    }, []);

    return (
        <>
            <section className="view-section">
                <h1>Dashboard</h1>
                {error
                    ? <p>{error}</p>
                    : <ul>
                        {posts.map(x => <li key={x.id}>{x.title}</li>)}
                    </ul>}
            </section>
        </>
    )
}
