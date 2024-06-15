import React from 'react'
import PostCard from '../postCard/PostCard'
import { PostProps } from '../../types/types';

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok){
        throw new Error("Failed to fecth data")
    }

    return res.json();
}

const PostList = async () => {
    const data:PostProps[] = await getData()

  return <div className='postList'>
    {/* <PostCard title="post1" desc="long post about react"/> */}
    {data.map((post) => (
        <PostCard key={post.id} {...post} />
    ))}
  </div>
  
}

export default PostList