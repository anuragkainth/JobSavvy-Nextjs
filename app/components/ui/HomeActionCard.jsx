import React from 'react'
function ActionCard({ icon, label }) {
    return (
        <button className="bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-6 rounded-lg transition duration-300 ease-in-out flex flex-col items-center justify-center space-y-4 shadow-lg hover:shadow-green-400/20 hover:text-green-400 group">
            {React.cloneElement(icon, { className: "w-10 h-10 group-hover:text-green-400" })}
            <span className="font-medium text-center">{label}</span>
        </button>
    )
}
export { ActionCard }