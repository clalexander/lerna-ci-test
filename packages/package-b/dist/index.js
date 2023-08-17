import { sayHello, sayHola } from 'package-a';
export function sayHelloToEveryone(people) {
    return people.map((person) => sayHello(person));
}
export function sayHolaToEveryone(people) {
    return people.map((person) => sayHola(person));
}
