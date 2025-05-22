"use client";

import Button from "@codegouvfr/react-dsfr/Button";
import { cloneElement, useState } from "react";

export const Tab = ({
  children,
  selected,
  disabled = false,
  handleClick = () => {},
}: {
  selected?: boolean;
  disabled?: boolean;
  handleClick?: () => void;
  children: string | JSX.Element | JSX.Element[];
}) => (
  <div className={`tab${selected ? " selected" : ""}`}>
    <Button
      disabled={disabled}
      onClick={handleClick}
      priority="tertiary no outline"
      size="sm"
    >
      {children}
    </Button>
  </div>
);

export const Tabs = ({
  children,
  selectedIndex = 0,
  setSelectedIndex = () => {},
}: {
  selectedIndex?: number;
  children: JSX.Element[];
  setSelectedIndex?: (index: number) => void;
}) => (
  <div className="tabs">
    {children.map((child, i) =>
      cloneElement(child, {
        key: i,
        selected: i === selectedIndex,
        handleClick: () => setSelectedIndex(i),
      }),
    )}
  </div>
);

const Panel = ({
  children,
  selected = false,
}: {
  selected?: boolean;
  children: JSX.Element[];
}) => <div className={`panel${selected ? " selected" : ""}`}>{children}</div>;

export const Panels = ({
  children,
  selectedIndex = 0,
  setSelectedIndex = () => {},
}: {
  selectedIndex?: number;
  children: JSX.Element[];
  setSelectedIndex?: (index: number) => void;
}) => (
  <div className="panels">
    {children.map((child, i) => (
      <Panel key={i} selected={i === selectedIndex}>
        {[child]}
      </Panel>
    ))}
  </div>
);

const TabPanel = ({ children }: { children: JSX.Element[] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="tab-panel">
      {children.map((child, i) =>
        cloneElement(child, { key: i, selectedIndex, setSelectedIndex }),
      )}
    </div>
  );
};

export default TabPanel;
