import { useEffect, useState } from 'react';

export const useDetectOutsideClick = (
  closestSelector: string,
  initialState: boolean,
) => {
  const [isVisible, setIsVisible] = useState(initialState);

  function hide({target}: Event) {
    if (!(target instanceof Element)) return;
    if (!target?.closest(closestSelector)) {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    if (isVisible) {
      window.addEventListener('mousedown', hide);
    }
    return () => {
      window.removeEventListener('mousedown', hide);
    }

  }, [isVisible, closestSelector]);

  return [isVisible, setIsVisible] as const;
}
