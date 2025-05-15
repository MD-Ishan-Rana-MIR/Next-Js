import React from 'react'

const Blog = async() => {

    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("done")
        },[2000])
    })

    return (
        <div>
            <h1>Blog</h1>
        </div>
    )
}

export default Blog