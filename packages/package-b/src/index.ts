import { sayHello } from 'package-a';

export function sayHelloToEveryone(people: string[]): string[] {
  return people.map((person) => sayHello(person));
}
