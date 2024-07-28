import { useCallback, useMemo, useState } from "react";

type AdapterAction = () => void;

/**
 * Abstract class Target, serving as the base for any adapter target.
 */
abstract class Target {
  /**
   * The request method that will be implemented by subclasses.
   */
  request!: AdapterAction;
}

/**
 * Custom hook useAdapter to manage the state of an adapter target.
 *
 * @template T - The type extending from Target.
 * @param {T | (() => T)} target - The initial target object or a function that returns the target object.
 * @param {object} props - Additional properties to assign to the target object.
 * @returns {T} - The current state of the adapter target.
 */

function useAdapter<T extends Target>(target: T | (() => T), props = {}): T {
  // Request action to update the state of the target.
  const request: AdapterAction = useCallback(() => {
    setState((prevState) => ({ ...createdTarget }));
  }, []);

  // Memoized creation of the target object. Ensures the target is only created once.
  const createdTarget = useMemo(() => {
    const initTarget = typeof target === "function" ? target() : target;
    initTarget.request = request;
    return initTarget;
  }, []);
  useMemo(() => {
    Object.assign(createdTarget, props);
  }, [props]);
  // State management for the target object.
  const [state, setState] = useState<T>(createdTarget);

  return createdTarget;
}

export { useAdapter, Target, type AdapterAction };
