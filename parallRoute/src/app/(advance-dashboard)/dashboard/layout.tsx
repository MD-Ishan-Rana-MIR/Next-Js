import React from 'react'
type childrenType = {
    children: React.ReactNode;
    invoice: React.ReactNode;
    revinew: React.ReactNode
}

const DashboardLayout = ({ children, invoice,revinew}: childrenType) => {
    return (
        <div className='flex gap-x-3.5 ' >
            <div className=' w-52 border h-[90vh] overflow-y-scroll ' >sidebar</div>
            <div className=' min-h-screen p-4 border w-full ' >
                {children}
                <div>
                    {invoice}
                    {revinew}
                </div>

            </div>

        </div>
    )
}

export default DashboardLayout