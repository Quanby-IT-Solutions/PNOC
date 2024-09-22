import React from 'react';
import MainMenu from './MainMenu';
import SidebarActions from './SidebarAction';

const menuItems = [
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/42765c89719dcb0283d6cf4956105e4ef2c27c291de6e4b2275328c4bcbea5d9?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e", 
    label: "Dashboard", 
    link: "/dashboard" // Link to the dashboard page
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed73b88d6576b06687966b614a3425642067df24e1c0831c616019bf6e5cf05c?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e", 
    label: "User Management", 
    link: "/user-management" // Link to the user management page
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c1176f153b0feb1c35e0450fcc3dfac827d5418baeaaab5e6f7554be97a3f04?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e",
    label: "System Settings", 
    link: "/system-settings" // Link to the system settings page
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/38b42c274d7cca5289261b7b10003ab45520b9ef4c4f2e27d25e6b1bf9eaae48?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e", 
    label: "Purchasing", 
    link: "/purchasing" // Link to the purchasing page
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/38b42c274d7cca5289261b7b10003ab45520b9ef4c4f2e27d25e6b1bf9eaae48?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e", 
    label: "Accounts Payable", 
    link: "/accounts-payable" // Link to the accounts payable page
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/36dff553593912678bfed98933187bbd5afcafb2eb2b649190a403a9c873e39e?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e", 
    label: "General Ledger", 
    link: "/general-ledger" // Link to the general ledger page
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f137273226500b022398f300e3538efce0843ac64ad8520a5b44044757e25c5?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e", 
    label: "Payroll", 
    link: "/payroll" // Link to the payroll page
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/38b42c274d7cca5289261b7b10003ab45520b9ef4c4f2e27d25e6b1bf9eaae48?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e", 
    label: "Reports & Compliance", 
    link: "/reports-compliance" // Link to the reports & compliance page
  },
];

const sidebarActions = [
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/83cc432b91af6525f38890751fca98f5a459ee448e258d90c9d38dbc96c1c1b0?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e", 
    label: "Report a Problem", 
    link: "/report-problem" // Link for reporting a problem
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/38b42c274d7cca5289261b7b10003ab45520b9ef4c4f2e27d25e6b1bf9eaae48?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e",
    label: "Sign Out", 
    link: "/sign-out" // Link for signing out
  },
];

export interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => (
  <main className="flex overflow-hidden flex-col px-9 pt-12 pb-5 mx-auto w-full bg-slate-800 max-w-[480px]">
    <header className="flex gap-2.5 items-center self-start">
      <div className="flex gap-2.5 items-center self-stretch my-auto w-[75px]">
        <img
          loading="lazy"
          src=""
          alt="Logo"
          className="object-contain self-stretch my-auto aspect-square w-[75px]"
        />
      </div>
      <div className="flex flex-col self-stretch my-auto text-base h-[75px] w-[216px]">
        <h1 className="font-bold text-amber-500">
          Southern Luzon Technological College Foundation, Inc.
        </h1>
        <p className="font-medium text-white">Accounting System</p>
      </div>
    </header>
    <div className="flex gap-2.5 mt-20 w-full">
      <aside className="flex flex-col flex-1 shrink my-auto basis-0 min-w-[240px]">
        <div className="flex flex-col w-full">
          <h2 className="flex-1 shrink gap-2.5 self-stretch px-8 w-full text-xl font-medium text-zinc-400">
            MAIN MENU
          </h2>
          <MainMenu menuItems={menuItems} />
        </div>
        <SidebarActions actions={sidebarActions} />
      </aside>
      <div className="flex flex-col pt-36 w-3 pb-[511px]">
        <div className="flex shrink-0 bg-amber-500 h-[204px]" />
      </div>
    </div>
  </main>
);
