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

export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const clean = hex.replace("#", "");
  return {
    r: Number.parseInt(clean.slice(0, 2), 16),
    g: Number.parseInt(clean.slice(2, 4), 16),
    b: Number.parseInt(clean.slice(4, 6), 16),
  };
}

function buildCssVars(hex: string): Record<string, string> {
  const { r, g, b } = hexToRgb(hex);
  return {
    "--accent": hex,
    "--accent-r": String(r),
    "--accent-g": String(g),
    "--accent-b": String(b),
    "--accent-dim": `rgba(${r},${g},${b},0.15)`,
    "--accent-glow": `rgba(${r},${g},${b},0.06)`,
    "--border-accent": `rgba(${r},${g},${b},0.3)`,
  };
}

interface ThemeContextValue {
  accent: string;
  accentRgb: { r: number; g: number; b: number };
  setAccent: (hex: string, origin?: { x: number; y: number }) => void;
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
    const vars = buildCssVars(hex);
    const root = document.documentElement;
    for (const [key, value] of Object.entries(vars)) {
      root.style.setProperty(key, value);
    }
  }, []);

  useEffect(() => {
    applyCssVars(accent);
  }, [accent, applyCssVars]);

  const setAccent = useCallback(
    (hex: string, origin?: { x: number; y: number }) => {
      if (hex === accent) return;

      // Store click coordinates for the view-transition CSS
      if (origin) {
        document.documentElement.style.setProperty("--vt-x", `${origin.x}px`);
        document.documentElement.style.setProperty("--vt-y", `${origin.y}px`);
      }

      const doSwitch = () => {
        applyCssVars(hex);
        setAccentState(hex);
        localStorage.setItem(STORAGE_KEY, hex);
      };

      if (origin && document.startViewTransition) {
        document.startViewTransition(() => doSwitch());
      } else {
        doSwitch();
      }
    },
    [accent, applyCssVars]
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
