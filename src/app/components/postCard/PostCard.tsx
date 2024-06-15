import React from 'react'


const PostCard = (props: {title:string; body:string}) => {
  return <div className="postCard">
    <h1 className='text-zinc-500 text-2xl font-bold'>{props.title}</h1>
    <h3 className="text-slate-500">{props.body}</h3>
    </div>
}

export default PostCard