import invariant from 'invariant';

import useMethod from './useMethod';
import { ArrayMethods, arrayMethods } from './lib';

const useArray = <T>(initialValue: T[] = []) => {
	invariant(Array.isArray(initialValue), 'initialValue must be an array');
	return useMethod<T[], ArrayMethods<T>>(initialValue, arrayMethods);
};

export { useArray };
export default useArray;
