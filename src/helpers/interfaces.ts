interface InputEvent extends React.ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement;
}

interface Participant {
  address: string;
  email: string;
  id: number;
  username: string;
}

export type { InputEvent, Participant };
