import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md px-6 py-4">
        <div className="flex justify-between items-center">
            <div>
                <img src="/totallogo.png" alt="Logo for Total Electronics" className="h-10" />
            </div>

            <ul className="flex space-x-6">
                <li className="hover:text-blue-600 cursor-pointer">Home</li>
                <li className="hover:text-blue-600 cursor-pointer">Services</li>
                <li className="hover:text-blue-600 cursor-pointer">Contact</li>
            </ul>
        </div>
        </nav>
    )
}

export default Navbar