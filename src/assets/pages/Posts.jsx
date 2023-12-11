
import { useLoaderData } from "react-router-dom";

const Posts = () => {

    const {post} = useLoaderData();

    return (
        <div>
            <h1>
                {post.id} - {post.title}
            </h1>
            <p>{post.body} </p>
        </div>
    )
}

export default Posts;

export const LoaderPost = async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    if(!res.ok)throw{
        status: res.status,
        statusText: "No encontrado",
    }

    const post = await res.json();
    return {post};
};


