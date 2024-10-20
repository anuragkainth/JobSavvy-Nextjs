import React from 'react'
import { Search, LogOut, LayoutDashboard, MessageSquarePlus, Save, Film, Globe } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 bg-opacity-50 p-6 flex flex-col justify-between border-r border-green-900/20">
        <div className="space-y-4">
          <SidebarButton icon={<LogOut className="w-6 h-6" />} label="Sign Out" />
          <SidebarButton icon={<LayoutDashboard className="w-6 h-6" />} label="Dashboard" />
          <SidebarButton icon={<MessageSquarePlus className="w-6 h-6" />} label="New Chat" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-between p-8 relative overflow-auto">
        <div className="w-full max-w-4xl flex flex-col items-center justify-center flex-grow">
          <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-green-400 drop-shadow-lg">
            JobSavvy
          </h1>
          <div className="w-full max-w-2xl relative mb-12">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-4 px-6 bg-gray-800 bg-opacity-50 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out placeholder-gray-500 border border-gray-700 hover:border-green-400"
            />
            <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            <ActionCard icon={<Save className="w-6 h-6" />} label="Saved Prompt Templates" />
            <ActionCard icon={<Film className="w-6 h-6" />} label="Media Type Selection" />
            <ActionCard icon={<Globe className="w-6 h-6" />} label="Multilingual Support" />
          </div>
        </div>
        <footer className="w-full text-center text-sm text-gray-500 mt-8">
          Powered by JobSavvy
        </footer>
      </div>
    </div>
  )
}

function SidebarButton({ icon, label }) {
  return (
    <button className="w-full bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-left py-4 px-6 rounded-lg transition duration-300 ease-in-out flex items-center space-x-4 shadow-lg hover:shadow-green-400/20 hover:text-green-400 group">
      {React.cloneElement(icon, { className: "w-6 h-6 group-hover:text-green-400" })}
      <span className="font-medium">{label}</span>
    </button>
  )
}

function ActionCard({ icon, label }) {
  return (
    <button className="bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-6 rounded-lg transition duration-300 ease-in-out flex flex-col items-center justify-center space-y-4 shadow-lg hover:shadow-green-400/20 hover:text-green-400 group">
      {React.cloneElement(icon, { className: "w-10 h-10 group-hover:text-green-400" })}
      <span className="font-medium text-center">{label}</span>
    </button>
  )
}