import { useState, useEffect } from "react";

export function useClipboard() {
  const [copied, setCopied] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  if (!navigator?.clipboard) {
    setError("Clipboard API not supported");
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (copied) {
        setCopied(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [copied]);

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (error) {
      setError((error as Error).message);
    }
  }

  return {
    error,
    copy,
    copied,
  };
}
