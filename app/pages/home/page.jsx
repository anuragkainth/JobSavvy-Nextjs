import React from 'react'
import { Search, Globe, List, BriefcaseBusiness } from 'lucide-react'
import { SideBar } from '../../components/layout/SideBar'
import { ActionCard } from '../../components/ui/HomeActionCard'
import { Footer } from '@/app/components/layout/Footer'

export default function HomePage() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Sidebar */}
      <SideBar />
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
            <ActionCard icon={<List className="w-6 h-6" />} label="Manage Jobs, Avoid Clutter" />
            <ActionCard icon={<BriefcaseBusiness className="w-6 h-6" />} label="Get Jobs That Matters" />
            <ActionCard icon={<Globe className="w-6 h-6" />} label="5+ Job Portal Supported" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}