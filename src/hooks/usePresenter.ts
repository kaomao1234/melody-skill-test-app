import { Dispatch, SetStateAction, useMemo, useState } from "react";

/**
 * Base class for managing presenters.
 * Provides a mechanism to update state and ensures methods retain their context.
 */
class Presenter {
  protected _set: Dispatch<SetStateAction<this>>;
  hashCode = Math.random();

  /**
   * Constructor for Presenter.
   * @param set - The function to set the state.
   * WARNING: Ensure to pass the correct type parameter to Dispatch<SetStateAction<this>> for type safety.
   */
  constructor(set: Dispatch<SetStateAction<any>>) {
    this._set = set;
  }

  /**
   * Updates the state by merging the current instance with the previous state.
   * This method should be called by derived classes to update their state.
   * IMPORTANT: Ensure to use arrow functions or bind methods in the constructor
   * to avoid losing context (`this`) when calling `update`.
   */
  protected update() {
    if (this._set) {
      this._set((prev) => ({ ...prev, ...this }));
    }
  }
}

/**
 * Custom hook to create and use a Presenter.
 * @param createPresenter - A function that creates an instance of a Presenter class.
 * @returns The instance of the created Presenter class.
 */
function usePresenter<T extends Presenter>(
  createPresenter: (set: Dispatch<SetStateAction<T>>) => T
) {
  const [state, set] = useState<T | null>(null);
  // Create the Presenter instance only once using useMemo
  const presenterInstance = useMemo(() => {
    return createPresenter(set as Dispatch<SetStateAction<T>>);
  }, [createPresenter]);

  // Return the Presenter instance or the current state if already initialized
  return state || presenterInstance;
}

export { usePresenter, Presenter };
