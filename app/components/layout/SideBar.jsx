import { LogOut, LayoutDashboard, MessageSquarePlus } from 'lucide-react';
import { SidebarButton } from '../ui/SidebarButton';
import React from 'react';

export function SideBar() {
    return (
        <div className="w-64 bg-gray-900 bg-opacity-50 p-6 flex flex-col justify-between border-r border-green-900/20">
            <div className="flex-grow space-y-4">
                <SidebarButton icon={<LayoutDashboard className="w-6 h-6" />} label="Dashboard" />
            </div>
            <div className="mt-auto space-y-4">
                <SidebarButton icon={<MessageSquarePlus className="w-6 h-6" />} label="New Chat" />
                <SidebarButton icon={<LogOut className="w-6 h-6" />} label="Sign Out" />
            </div>
        </div>
    )
}