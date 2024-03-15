"use client";
import Script from "next/script";
import { ReactNode } from "react";

export const ScriptProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/@personaxyz/attribution-sdk@latest"
        crossOrigin="anonymous"
        onLoad={() => {
          if (!window.persona) {
            window._persona.Attribution.init({ apiKey: "<YOUR_API_KEY_HERE>" });
            window.persona = window._persona.Attribution;
          }
        }}
      ></Script>
      {children}
    </>
  );
};
