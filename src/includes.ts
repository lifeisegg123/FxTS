import some from "./some";
import ReturnValueType from "./types/ReturnValueType";
import { UniversalIterable } from "./types/Utils";
import { isAsyncIterable, isIterable } from "./_internal/utils";

/**
 * Checks if the specified value is equal. (contains)
 *
 * @example
 * ```ts
 * includes('c', 'abcd'); // true
 * includes('e', 'abcd'); // false
 * includes(3, [1,2,3,4]); // true
 * includes(5, [1,2,3,4]); // false
 * ```
 */
function includes<T extends readonly []>(value: unknown, iterable: T): false;

// prettier-ignore
function includes<T>(
    value: unknown,
    iterable: Iterable<T>
): boolean;

function includes<T>(
  value: unknown,
  iterable: AsyncIterable<T>,
): Promise<boolean>;

function includes<T extends UniversalIterable<unknown>>(
  value: unknown,
): (iterable: T) => ReturnValueType<T, boolean>;

function includes<T extends UniversalIterable<unknown>>(
  value: unknown,
  iterable?: T,
): boolean | Promise<boolean> | ((iterable: T) => ReturnValueType<T, boolean>) {
  if (iterable === undefined) {
    return (iterable) => {
      return includes(value, iterable as any) as ReturnValueType<T, boolean>;
    };
  }

  if (isIterable(iterable)) {
    return some((a) => a === value, iterable);
  }

  if (isAsyncIterable(iterable)) {
    return some((a) => a === value, iterable);
  }

  throw new TypeError("'iterable' must be type of Iterable or AsyncIterable");
}

export default includes;
