// declar parameter types, and then return type
function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;

export const addStrings = (str1: string, str2: string = 'default value'): string => `${str1} ${str2}`;

export const format = (title: string, param: string | number): string => `${title}: ${param}`;

// void function
export const printFormat = (title: string, param: string | number): void => {
  console.log(`${title}: ${param}`)
};

// returning a promise
export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);

// rest parameters
function introduce(salutation: string, ...names: string[]): string {
  return `${salutation}, ${names.join(', ')}`;
}

export function getName(user: { first: string; last: string; }): string {
  // optional chaining with null coalescing to allow for more agile JavaScript compilation
  // null coalescing provides a default value in the case of null or undefined
  return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`;
}