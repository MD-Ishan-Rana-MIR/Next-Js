import Link from 'next/link'
import React from 'react'

const Notification: React.FC = () => {
    return (
        <div>
            <Link href={"/dashboard/alert"} ><button className=' cursor-pointer px-4 py-1 font-bold rounded-2xl bg-amber-500 ' >Alert</button></Link>
        </div>
    )
}

export default Notification