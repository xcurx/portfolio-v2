"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export interface AccentColor {
  name: string;
  hex: string;
}

export const accentPalette: AccentColor[] = [
  { name: "Yellow", hex: "#eaff00" },
  { name: "Cyan", hex: "#00e5ff" },
  { name: "Green", hex: "#00ff88" },
  { name: "Purple", hex: "#b366ff" },
  { name: "Orange", hex: "#ff6b35" },
  { name: "Pink", hex: "#ff3388" },
];

const DEFAULT_ACCENT = accentPalette[0].hex;
const STORAGE_KEY = "portfolio-accent";

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const clean = hex.replace("#", "");
  return {
    r: Number.parseInt(clean.slice(0, 2), 16),
    g: Number.parseInt(clean.slice(2, 4), 16),
    b: Number.parseInt(clean.slice(4, 6), 16),
  };
}

interface ThemeContextValue {
  accent: string;
  accentRgb: { r: number; g: number; b: number };
  setAccent: (hex: string) => void;
  palette: AccentColor[];
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [accent, setAccentState] = useState(DEFAULT_ACCENT);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && accentPalette.some((c) => c.hex === stored)) {
      setAccentState(stored);
    }
  }, []);

  const applyCssVars = useCallback((hex: string) => {
    const { r, g, b } = hexToRgb(hex);
    const root = document.documentElement;
    root.style.setProperty("--accent", hex);
    root.style.setProperty("--accent-r", String(r));
    root.style.setProperty("--accent-g", String(g));
    root.style.setProperty("--accent-b", String(b));
    root.style.setProperty("--accent-dim", `rgba(${r},${g},${b},0.15)`);
    root.style.setProperty("--accent-glow", `rgba(${r},${g},${b},0.06)`);
    root.style.setProperty(
      "--border-accent",
      `rgba(${r},${g},${b},0.3)`
    );
  }, []);

  useEffect(() => {
    applyCssVars(accent);
  }, [accent, applyCssVars]);

  const setAccent = useCallback(
    (hex: string) => {
      setAccentState(hex);
      localStorage.setItem(STORAGE_KEY, hex);
    },
    []
  );

  const accentRgb = hexToRgb(accent);

  return (
    <ThemeContext.Provider
      value={{ accent, accentRgb, setAccent, palette: accentPalette }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
