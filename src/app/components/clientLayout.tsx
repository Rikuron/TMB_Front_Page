"use client";

import React, { useRef } from "react";
import Header from "../sections/header";
import { useHeaderHeight } from "../hooks/useHeaderHeight";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerHeight = useHeaderHeight(headerRef);

  return (
    <body className="antialiased">      
      <div className="relative">
        <Header ref={headerRef} />
        <main style={{ paddingTop: `${headerHeight + 40}px` }}>{children}</main>
      </div>
    </body>
  )
}