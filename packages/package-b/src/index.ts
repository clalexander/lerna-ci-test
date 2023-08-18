import { sayHello, sayHola } from 'package-a';

export function sayHelloToEveryone(people: string[]): string[] {
  return people.map((person) => sayHello(person));
}

export function sayHolaToEveryone(people: string[]): string[] {
  return people.map((person) => sayHola(person));
}

// bump version again
