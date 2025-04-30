import React, { useEffect, useState } from "react";

interface NavigationSidebarProps {
  sections: { id: string; name: string; isNew?: boolean }[];
}

const NavigationSidebar: React.FC<NavigationSidebarProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("company-mission");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm sticky top-4">
      <h3 className="text-lg font-normal mb-4">Jump to section</h3>
      <ul className="space-y-4">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`block py-1 ${
                section.id === activeSection
                  ? "border-l-4 border-yellow-400 pl-3 font-medium"
                  : "pl-4 text-gray-700 hover:text-black"
              }`}
            >
              {section.name}
              {section.isNew && (
                <span className="ml-2 bg-pink-200 text-pink-800 text-xs px-2 py-0.5 rounded">
                  New
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationSidebar;
