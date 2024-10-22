import React from 'react'

export function SidebarButton({ icon, label }) {
    return (
        <button className="w-full bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-left py-4 px-6 rounded-lg transition duration-300 ease-in-out flex items-center space-x-4 shadow-lg hover:shadow-green-400/20 hover:text-green-400 group">
            {React.cloneElement(icon, { className: "w-6 h-6 group-hover:text-green-400" })}
            <span className="font-medium">{label}</span>
        </button>
    )
}