import { Participant } from './interfaces';

export function checkUserInList(arr: Participant[], id: string) {
  return arr.find((elem) => elem.id === id);
}
