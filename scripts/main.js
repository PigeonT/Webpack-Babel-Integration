//import "babel-polyfill";
import {default as User} from './User';

let bob = new User('Bob', 'office', 23);

console.info(`My name is ${bob.getName()} and my job is ${bob.getJob()}`);
