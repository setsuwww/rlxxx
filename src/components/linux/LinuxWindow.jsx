import React from "react";
import { LINUX_WINDOW_CLASSES } from "../../constants/linuxTheme";

function LinuxWindow({ title, children, showFooter = false, footerContent, dark = true }) {
  const classes = dark ? LINUX_WINDOW_CLASSES.dark : LINUX_WINDOW_CLASSES.light;

  return (
    <div className="max-w-6xl mx-auto">
      <div className={`${classes.bgClass} backdrop-blur-md rounded-lg shadow-lg overflow-hidden`}>
        
        {/* Header */}
        <header className={`${classes.headerClass} flex items-center justify-between px-6 py-4 border-b`}>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <span className={`ml-4 text-sm ${classes.textClass}`}>{title}</span>
        </header>

        {/* Main Content */}
        <main className={`${classes.divideClass} py-8 px-6 ${classes.mainTextClass}`}>
          {children}
        </main>

        {/* Footer Opsional */}
        {showFooter && (
          <footer className={`border-t px-6 py-4 text-sm ${classes.textClass} ${classes.borderClass}`}>
            {footerContent || "Footer content here..."}
          </footer>
        )}
      </div>
    </div>
  );
}

export default React.memo(LinuxWindow);
