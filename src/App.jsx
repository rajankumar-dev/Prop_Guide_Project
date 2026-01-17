import React from "react";
import BasicProps from "./components/BasicProps";
import RefProps from "./components/RefProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import ThemeToggler from "./components/ThemeToggler";

const isDark = true;
function Navigation() {
  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "children", label: "children Props", icon: "👶" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "theme", label: "Theme Toggler", icon: "🎨" },
  ];

  return (
    <nav className={`sticky top-0 z-50 shadow-lg`}>
      <div
        className={`h-[5rem] flex items-center justify-center flex-wrap gap-2`}
      >
        <div>
          {sections.map((section) => (
            <button
              className={`px-4 py-2 rounded-lg font-medium bg-blue-600 text-white transition-all mr-2 hover:bg-blue-800`}
              key={section.id}
            >
              <span className="mr-1">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  return (
    <div className={`min-h-screen bg-gray-800`}>
      <Navigation />;
      <div className="container mx-auto px-4 py-8">
        <header
          className={`mb-8 text-center text-white transition-colors ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          <h1 className="text-5xl font-bold mb-4">React props explained</h1>
          <p
            className={`text-xl ${
              isDark ? "text-gray-300" : "text-gray-600"
            } mb-2`}
          >
            A comprehensive guide to understanding props in React
          </p>
          <span className="font-semibold">
            Built with Bun + Vite + React + Tailwind CSS
          </span>
        </header>

        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <BasicProps />
          </div>
          <div id="ref" className="scroll-mt-200">
            <RefProps />
          </div>
          <div id="children" className="scroll-mt-200">
            <ChildrenProps />
          </div>
          <div id="complex" className="scroll-mt-200">
            <ComplexProps />
          </div>
          <div id="theme" className="scroll-mt-200">
            <ThemeToggler />
          </div>
        </div>
        {/* space-y-8 */}

        <footer
          className={`mt-12 text-center pb-8 transition-colors ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <p className="text-sm">
            Made with ❤️ using Bun, Vite, React, and Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}

const App = () => {
  return <AppContent />;
};

export default App;
