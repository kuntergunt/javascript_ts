

 /**
  * https://github.com/sveltejs/svelte/blob/master/packages/svelte/src/runtime/store/public.d.ts
  */

 export type Person = {
    name: string,
    age: number
  };

 export type Updater<T> = (value: T) => T;

/**
 * @param {(value: T) => void} 
 * @param {(value: Updater<T>) => void} 
 * @returns {void | (() => void)} 
 */
export type StartStopNotifier<T> = (
	set: (value: T) => void,
	update: (fn: Updater<T>) => void
) => void | (() => void);

declare var testPersonVar: StartStopNotifier<String>;

declare let testPersonLet: StartStopNotifier<Person>;

export interface Test1 {
    public name: string;
    private age: number;

    public setName(newName: string): void;

    public getName(): string;    
}

export interface Test2 extends Test1 {
    //public constructor(name: string, age: number);

    private incrementAge(years: number): void;
}

