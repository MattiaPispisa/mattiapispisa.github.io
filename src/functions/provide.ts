import React from "react";

type ProviderComponent<HookProps> = (
  props: HookProps & { children?: React.ReactNode }
) => JSX.Element;

/**
 * This function takes the state of the MainHook supplied to the `provide` function and returns one of its elements
 */

type Selector<HookState> = (value: HookState) => any;

type SelectorsHooks<Selectors> = {
  [K in keyof Selectors]: () => Selectors[K] extends (...args: any) => infer R
    ? R
    : never;
};

type ContextHooks<
  HookState,
  Selectors extends Selector<HookState>[]
> = Selectors extends [] ? [() => HookState] : SelectorsHooks<Selectors>;

/**
 * - HookProps: Props of the hook injected by the Provider
 * - MainHookState: State of the MainHook supplied to the `provide` function
 */

type ContextProviderAndSelectors<
  HookProps,
  HookState,
  Selectors extends Selector<HookState>[]
> = [
  ProviderComponent<HookProps>,
  // @ts-ignore
  // TODO: try to figure out why removing this ignores the build fails
  ...ContextHooks<HookState, Selectors>
];

const createUseContext = (context: React.Context<any>): any => {
  return () => React.useContext(context);
};

/**
 * This function takes an hooks as input (and optionally a list of selectors) and gets back a context for interacting with its state.
 * @param useMainHook The hook to provide context to
 * @param selectors If you provide a list of selectors a context will be created for each of them, otherwise a context will be created for all the MainHook state
 * @returns [Provider, useHookContext] | [Provider, useSelectorOneContext, useSelectorTwoContext,...]
 *
 *
 * EXAMPLE 1. (without passing a list of selectors):
 *
 * function useCounter() {
 *      const [count, setCount] = useState(0);
 *      const increment = () => setCount(prevCount => prevCount + 1);
 *      return { count, increment };
 * }
 *
 * const [CounterProvider, useCounterContext] = provide(useCounter);
 *
 * function Button() {
 *      const {increment} = useIncrementContext();
 *      return <button onClick={increment}>+</button>;
 * }
 *
 * function Count() {
 *      const {count} = useCounterContext();
 *      return <span>{count}</span>;
 * }
 *
 * function App() {
 *      return (
 *          <CounterProvider >
 *              <Count />
 *              <Button />
 *          </CounterProvider>
 *      );
 * }
 *
 * EXAMPLE 2. (passing a list of selectors):
 *
 * function useCounter() {
 *      const [count, setCount] = useState(0);
 *      const increment = () => setCount(prevCount => prevCount + 1);
 *      return { count, increment };
 * }
 *
 * const [CounterProvider, useIncrementContext, useCounterContext] = provide(useCounter, (state) => state.increment, (state) => state.count);
 *
 * function Button() {
 *      const increment = useIncrementContext();
 *      return <button onClick={increment}>+</button>;
 * }
 *
 * function Count() {
 *      const count = useCounterContext();
 *      return <span>{count}</span>;
 * }
 *
 * function App() {
 *      return (
 *          <CounterProvider>
 *              <Count />
 *              <Button />
 *          </CounterProvider>
 *      );
 * }
 *
 */

const provide = <
  MainHookProps,
  MainHookState,
  Selectors extends Selector<MainHookState>[]
>(
  useMainHook: (props: MainHookProps) => MainHookState,
  ...selectors: Selectors
): ContextProviderAndSelectors<MainHookProps, MainHookState, Selectors> => {
  const contexts = [] as React.Context<any>[];
  const contextsHooks = [] as unknown as ContextHooks<MainHookState, Selectors>;

  const createContext = () => {
    const NO_PROVIDER = {};
    const context = React.createContext(NO_PROVIDER);
    contexts.push(context);
    contextsHooks.push(createUseContext(context));
  };

  if (selectors.length) {
    selectors.forEach(() => createContext());
  } else {
    createContext();
  }

  const Provider: ProviderComponent<MainHookProps> = ({
    children,
    ...props
  }): React.ReactElement => {
    const value = useMainHook(props as MainHookProps);
    let element: React.ReactElement = children as React.ReactElement;
    for (let i = 0; i < contexts.length; i += 1) {
      const context = contexts[i];
      const selector = selectors[i] || ((v: typeof value) => v);
      element = React.createElement(
        context.Provider,
        { value: selector(value) },
        element
      );
    }
    return element;
  };

  return [Provider, ...contextsHooks];
};

export { provide };
