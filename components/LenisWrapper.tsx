'use client';

import { useLenis } from "@/lib/useLenis";
import React from 'react';

export default function LenisWrapper({ children }: { children: React.ReactNode }) {
  useLenis();
  return <>{children}</>;
}