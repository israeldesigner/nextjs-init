import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

const PostTemp = () =>{

    const [counter, setCounter] = useState(0);
    const router  = useRouter();
    console.log(router);
    return <h1 onClick={()=> setCounter(counter + 1)}>Username: {router.query.id} && {counter}</h1>
}

export default PostTemp