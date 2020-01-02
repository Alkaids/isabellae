type State<T> = T[];

interface ArrayMethods<T=any> {
	push: (state: State<T>, item: State<T> | any) => State<T>;
	pop: (state: State<T>) => State<T>;
	slice: (state: State<T>, start: number, end: number) => State<T>;
	empty: () => State<T>;
	set: (state: State<T>, newValue: State<T>) => State<T>;
	remove: (state: State<T>, item: any) => State<T>;
}

const arrayMethods: ArrayMethods = {
	push(state, item) {
		return state.concat(item);
	},
	pop(state) {
		return state.slice(0, -1);
	},
	slice(state, start, end) {
		return state.slice(start, end);
	},
	empty() {
		return [];
	},
	set(_, newValue) {
		return newValue;
	},
	remove(state, item) {
		const index = state.indexOf(item);
		if (index < 0) {
			return state;
		}
		return [...state.slice(0, index), ...state.slice(index + 1)];
	}
};

export { ArrayMethods, State, arrayMethods };
