import { sayHello } from 'package-a';
export function sayHelloToEveryone(people) {
    return people.map((person) => sayHello(person));
}
