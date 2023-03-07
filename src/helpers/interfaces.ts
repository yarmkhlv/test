interface InputEvent extends React.ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement;
}

interface Participant {
  address: string | null;
  email: string | null;
  id: string;
  username: string | null;
}

interface Store {
  user: Participant;
  participants: Participant[];
}

export type { InputEvent, Participant, Store };
