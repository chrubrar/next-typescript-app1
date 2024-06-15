import { PostProps } from '@/app/types/types'
import React from 'react'


const PostCard = ({title, body}: PostProps) => {
  return <div className="postCard">
    <h1 className='text-zinc-500 text-2xl font-bold'>{title}</h1>
    <h3 className="text-slate-500">{body}</h3>
    </div>
}

export default PostCard