import { useRef, useState } from 'react';

interface UseDebouncedStateOptions {
  timeout?: number;
  onDebounceChange?: () => void;
}

const useDebouncedState = <T>(
  defaultValue: T,
  { onDebounceChange, timeout = 0 }: UseDebouncedStateOptions = {}
) => {
  const [state, setState] = useState(defaultValue);
  const [debouncedState, setDebouncedState] = useState(defaultValue);

  const [isDebouncing, setIsDebouncing] = useState(false);

  const timeoutKeyRef = useRef<NodeJS.Timeout>();

  const handleChange = (newState: T) => {
    clearTimeout(timeoutKeyRef.current);

    setState(newState);
    setIsDebouncing(true);

    const timeoutkey = setTimeout(() => {
      setIsDebouncing(false);
      onDebounceChange?.();
      setDebouncedState(newState);
    }, timeout);

    timeoutKeyRef.current = timeoutkey;
  };

  return { debouncedState, state, isDebouncing, handleChange };
};

export { useDebouncedState };
