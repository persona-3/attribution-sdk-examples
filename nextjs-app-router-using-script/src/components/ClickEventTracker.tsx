"use client";
import { ReactElement, cloneElement } from "react";

interface ClickEventTrackerProps {
  eventId: string;
  properties?: Record<string, string>;
  children?: ReactElement;
}

export const ClickEventTracker = (props: ClickEventTrackerProps) => {
  const { children, eventId, properties } = props;

  if (!children) return null;

  return cloneElement(children, {
    onClick: () => {
      window.persona.track(eventId, properties);
    },
  });
};
