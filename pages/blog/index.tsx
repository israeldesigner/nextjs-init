import { ReactChild, ReactFragment, ReactPortal } from 'react';

const API_URL = 'https://blogidesign.herokuapp.com';
const POSTS_URL = `${API_URL}/posts`;

const Blog = (posts:any) =>{

    return (
        <ul>
            {posts.map((post: { title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
                // eslint-disable-next-line react/jsx-key
                <li>{post.title}</li>
            ))}
        </ul>
    )
    
}

export async function getStaticProps() {
    const res = await fetch(POSTS_URL);
    const posts = await res.json();

    return {
        props:{
            posts,
        }
    }
}
export default Blog