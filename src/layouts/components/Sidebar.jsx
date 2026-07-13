import  SidebarItem  from "./SidebarItem.jsx";
import {Mail, LayoutDashboard, NotebookPen, FolderTree, Files, Search, Sparkles, CheckSquare,Tags, History, Trash2, BarChart3, Settings, CircleHelp } from "lucide-react";

const Sidebar = () => {
  return (
    <>
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side is-drawer-close:overflow-visible">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
              {/* Sidebar toggle icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4">
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>

            <SidebarItem to="/product" tooltip="Console" icon={LayoutDashboard}>
              Dashboard
            </SidebarItem>

            <SidebarItem to="/product/notes" tooltip="Notes" icon={NotebookPen}>
              Notes
            </SidebarItem>

            <SidebarItem to="/product/folders" tooltip="Folders" icon={FolderTree}>
              Folders
            </SidebarItem>

            <SidebarItem to="/product/files" tooltip="Files" icon={Files}>
              Files
            </SidebarItem>

            <SidebarItem to="/product/search" tooltip="Global Search" icon={Search}>
              Search
            </SidebarItem>

            <SidebarItem to="/product/ai" tooltip="AI Assistant" icon={Sparkles}>
              AI Assistant
            </SidebarItem>

            <SidebarItem to="/product/tasks" tooltip="Tasks" icon={CheckSquare}>
              Tasks
            </SidebarItem>

            <SidebarItem to="/product/tags" tooltip="Tags" icon={Tags}>
              Tags
            </SidebarItem>

            <SidebarItem to="/product/history" tooltip="History" icon={History}>
              History
            </SidebarItem>

            <SidebarItem to="/product/trash" tooltip="Trash" icon={Trash2}>
              Trash
            </SidebarItem>

            <SidebarItem to="/product/analytics" tooltip="Analytics" icon={BarChart3}>
              Analytics
            </SidebarItem>

            <SidebarItem to="/product/settings" tooltip="Settings" icon={Settings}>
              Settings
            </SidebarItem>

            <SidebarItem to="/product/help" tooltip="Help & Docs" icon={CircleHelp}>
              Help & Docs
            </SidebarItem>

            <SidebarItem to="/about" tooltip="About Us" icon={Mail}>
              About Us
            </SidebarItem>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
