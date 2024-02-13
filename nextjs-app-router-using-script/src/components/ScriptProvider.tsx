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
          window._persona.Attribution.init({
            apiKey: "<Your_API_Key_here>",
          });
        }}
      ></Script>
      {children}
    </>
  );
};
