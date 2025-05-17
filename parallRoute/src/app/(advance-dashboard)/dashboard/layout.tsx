// import React from 'react'
// type childrenType = {
//     children: React.ReactNode;
//     invoice: React.ReactNode;
//     revinew: React.ReactNode;
//     notification: React.ReactNode
// }

// const layout = ({ children, invoice, revinew, notification }: childrenType) => {
//     return (
//         <div className='flex gap-x-3.5 ' >
//             <div className=' w-52 border h-[90vh] overflow-y-scroll ' >sidebar</div>
//             <div className=' min-h-screen p-4 border w-full ' >
//                 {children}
//                 <div>
//                     {invoice}
//                     {revinew}
//                     {notification}
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default layout


import React from 'react'
type childrenType = {
    children: React.ReactNode;
    invoice: React.ReactNode;
    revinew: React.ReactNode;
    notification: React.ReactNode
}
const layout = ({ children, invoice, notification }: childrenType) => {
    return (
        <div>
            {
                children
            }
            {
                invoice
            }
            {
                notification
            }
        </div>
    )
}

export default layout