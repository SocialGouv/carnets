"use client";

import Button from "@codegouvfr/react-dsfr/Button";
import { cloneElement, useState, ReactElement } from "react";

// Define more specific types for children where possible for better type safety.
// For example, if Tab components are the only valid children for Tabs.

interface TabProps {
  selected?: boolean;
  disabled?: boolean;
  handleClick?: () => void;
  children: string | ReactElement | ReactElement[];
}

export const Tab = ({
  children,
  selected,
  disabled = false,
  handleClick = () => {},
}: TabProps) => (
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

interface TabsProps {
  selectedIndex?: number;
  children: ReactElement<TabProps>[]; // Assuming children are Tab components
  setSelectedIndex?: (index: number) => void;
}

export const Tabs = ({
  children,
  selectedIndex = 0,
  setSelectedIndex = () => {},
}: TabsProps) => (
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

interface PanelProps {
  selected?: boolean;
  children: ReactElement[]; // Or more specific type
}

const Panel = ({ children, selected = false }: PanelProps) => (
  <div className={`panel${selected ? " selected" : ""}`}>{children}</div>
);

interface PanelsProps {
  selectedIndex?: number;
  children: ReactElement[]; // Or ReactElement containing markdown-body
  setSelectedIndex?: (index: number) => void;
}

export const Panels = ({
  children,
  selectedIndex = 0,
  setSelectedIndex = () => {}, // Added for consistency, though not used in current logic
}: PanelsProps) => (
  <div className="panels">
    {children.map((child, i) => (
      <Panel key={i} selected={i === selectedIndex}>
        {[child]}
      </Panel>
    ))}
  </div>
);

interface TabPanelProps {
  children: ReactElement[]; // Expects Tabs and Panels as children
}

const TabPanel = ({ children }: TabPanelProps) => {
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
