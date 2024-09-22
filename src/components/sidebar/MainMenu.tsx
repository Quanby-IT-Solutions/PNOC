import React from 'react';

type MenuItem = {
  icon: string;
  label: string;
  link: string; // Add a link property
  hasSubmenu?: boolean;
};

type MainMenuProps = {
  menuItems: MenuItem[];
};

const MainMenu: React.FC<MainMenuProps> = ({ menuItems }) => {
  const handleItemClick = (link: string) => {
    window.location.href = link; // Redirect to the page using window.location.href
  };

  return (
    <nav className="flex flex-col items-start mt-10 w-full">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex gap-5 items-center mt-12 text-2xl font-medium text-white whitespace-nowrap cursor-pointer"
          onClick={() => handleItemClick(item.link)} // Call handleItemClick on click
        >
          <img
            loading="lazy"
            src={item.icon}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
          />
          <div className="self-stretch my-auto">{item.label}</div>
          {item.hasSubmenu && (
            <div className="flex flex-col items-start self-stretch my-auto w-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b3bc6617a22535033811815cb319a5c0e4aa9f1f8c6f5132b918bb2b25a659a?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e"
                alt=""
                className="object-contain w-2 aspect-[0.5]"
              />
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default MainMenu;
