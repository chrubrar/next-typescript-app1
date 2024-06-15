import React from 'react'
import PostCard from '../postCard/PostCard'

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok){
        throw new Error("Failed to fecth data")
    }

    return res.json();
}

const PostList = async () => {
    const data = await getData()

  return <div className='postList'>
    {/* <PostCard title="post1" desc="long post about react"/> */}
    {data.map((post: {id:number; title: string; body: string}) => (
        <PostCard key={post.id} {...post} />
    ))}
  </div>
  
}

export default PostList