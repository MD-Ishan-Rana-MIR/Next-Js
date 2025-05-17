"use client"


import React, { useEffect } from 'react'

const AbcPage = () => {
    useEffect(()=>{
        throw new Error(`error`)
    },[])
    return (
        <div>AbcPage</div>
    )
}

export default AbcPage