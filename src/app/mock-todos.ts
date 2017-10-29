import { Todo } from './todo';

export const TODOS: Todo[] = [
  {id: 1, task: 'Shopping', note:'Do shopping', toBeCompleted: Date.now() + Math.ceil(Math.random()*100000000) },
  {id: 2, task: 'Meet John', note:'Have a meeting with John', toBeCompleted: Date.now() + Math.ceil(Math.random()*100000000) },
  {id: 3, task: 'Take class', note:'Go to city to have Math class', toBeCompleted: Date.now() + Math.ceil(Math.random()*100000000) },
  {id: 4, task: 'Pick up Tom', note:'Pick up Tom at school', toBeCompleted: Date.now() + Math.ceil(Math.random()*100000000) },
  {id: 5, task: 'Technical meeting', note:'At meeting room 2', toBeCompleted: Date.now() + Math.ceil(Math.random()*100000000) },
  {id: 6, task: 'Market meeting ', note:'At meeting room 5', toBeCompleted: Date.now() + Math.ceil(Math.random()*100000000) },
];
