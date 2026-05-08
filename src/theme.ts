export type Theme = "light" | "dark";

const KEY = "synapse-prep-theme";

export function getStoredTheme(): Theme | null {
  try {
    const v = localStorage.getItem(KEY);
    if (v === "light" || v === "dark") return v;
    return null;
  } catch {
    return null;
  }
}

export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme === "light" ? "light" : "dark";
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    /* ignore */
  }
}

/** Call once on load: restore saved theme or follow system preference. */
export function initTheme(): Theme {
  const stored = getStoredTheme();
  if (stored) {
    applyTheme(stored);
    return stored;
  }
  const prefersDark =
    typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  const theme: Theme = prefersDark ? "dark" : "light";
  applyTheme(theme);
  return theme;
}

export function toggleTheme(current: Theme): Theme {
  const next: Theme = current === "dark" ? "light" : "dark";
  applyTheme(next);
  return next;
}
