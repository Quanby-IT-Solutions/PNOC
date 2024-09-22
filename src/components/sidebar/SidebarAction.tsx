import React from 'react';

type Action = {
  icon: string;
  label: string;
};

type SidebarActionsProps = {
  actions: Action[];
};

const SidebarActions: React.FC<SidebarActionsProps> = ({ actions }) => {
  return (
    <div className="flex flex-col mt-24 w-60 max-w-full text-2xl font-medium text-white">
      {actions.map((action, index) => (
        <div key={index} className="flex gap-3.5 justify-between items-center w-full mt-9 first:mt-0">
          <img loading="lazy" src={action.icon} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]" />
          <div className="self-stretch my-auto w-[197px]">{action.label}</div>
        </div>
      ))}
    </div>
  );
};

export default SidebarActions;