import React from 'react';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-900 text-white">
      <main>{children}</main>
    </div>
  );
}
