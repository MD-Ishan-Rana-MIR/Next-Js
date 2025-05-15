import Link from 'next/link'
import React from 'react'

const Navbar: React.FC = () => {
    return (
        <div>
            <header className=' bg-green-300 py-2.5 ' >
                <nav>
                    <ul className=' flex items-center space-x-3 justify-center ' >
                        <li> <Link href={"/"}>Home</Link> </li>
                        <li>
                            <Link href={"/dashboards/dashboard"}>Dashboard</Link>
                        </li>
                        <li>
                            <Link href={"/dashboards/overview"}>Overview</Link>
                        </li>
                        <li>
                            <Link href={"/dashboards/setting"}> Setting </Link>
                        </li>
                        <li>
                            <Link href={"/dashboards/reports"}>Reports</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar