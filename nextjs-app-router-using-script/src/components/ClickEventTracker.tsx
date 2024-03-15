"use client";
import { ReactElement, cloneElement } from "react";

interface ClickEventTrackerProps {
  eventName: string;
  properties?: Record<string, string>;
  children?: ReactElement;
}

export const ClickEventTracker = (props: ClickEventTrackerProps) => {
  const { children, eventName, properties } = props;

  if (!children) return null;

  return cloneElement(children, {
    onClick: () => {
      window.persona.track(eventName, properties);
    },
  });
};
