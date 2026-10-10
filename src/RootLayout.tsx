import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * RootLayout for Dominio Cycling Club
 * Header and footer removed as requested for the fullscreen coming soon / under construction experience.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-[#000000] text-white selection:bg-[#9D4EDD] selection:text-white overflow-x-hidden font-['Work_Sans',sans-serif]">
      {/* Header and footer removed for high-impact single fullscreen coming-soon view */}
      <main className="w-full min-h-screen flex flex-col justify-between items-center relative">
        {children}
      </main>
    </div>
  );
}
