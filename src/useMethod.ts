import { useState, useMemo } from 'react';

type BoundMethods<T> = { [K in keyof T]: (...args: any[]) => void };

const useMethod = <TV, TM>(initialValue: TV, methods: TM): [TV, BoundMethods<TM>] => {
	const [value, setValue] = useState(initialValue);
	const boundMethods = useMemo(
		() =>
			Object.entries(methods).reduce((methods, [name, fn]) => {
				const method = (...args) => {
					setValue(value => fn(value, ...args));
				};
				methods[name] = method;
				return methods;
			}, <BoundMethods<TM>>{}),
		[methods]
	);
	return [value, boundMethods];
};

export { useMethod };
export default useMethod;
