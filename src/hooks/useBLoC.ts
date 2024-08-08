import { useMemo, useState } from "react";

/**
 * CubitAction is a type that defines a function which takes another function as an argument.
 * The argument function receives the current state and performs some action on it.
 *
 * @template T - The type of the state managed by the Cubit.
 */
type CubitAction<T> = (action: (cubit: T) => void) => void;

/**
 * CubitDispatch is a type that defines a function which takes an emit function as an argument
 * and returns the initial state of the Cubit.
 *
 * @template T - The type of the state managed by the Cubit.
 */
type CubitDispatch<T> = (emit: CubitAction<T>) => T;

/**
 * useBLoC is a custom hook that manages the state of a Cubit. It initializes the state using the create function
 * and provides an emit function to update the state.
 *
 * @template T - The type of the state managed by the Cubit.
 * @param {CubitDispatch<T>} create - A function that takes an emit function and returns the initial state.
 * @returns {T} - The current state of the Cubit.
 */
function useBLoC<T extends object>(create: CubitDispatch<T>): T {
  // Initialize the state with the initial state returned by the create function.
  const [cubit, setCubit] = useState<T>(() => {
    const created = create((action) => {
      // Emit function to update the state immutably.
      setCubit((prev) => {
        const nextState = { ...prev };
        action(nextState);
        Object.assign(created, nextState);
        return nextState;
      });
    });
    return created;
  });
  return cubit;
}

export { useBLoC, type CubitDispatch, type CubitAction };
