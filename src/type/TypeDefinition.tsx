import { MouseEvent } from 'react';

export interface IUserInfo {
  name: string;
  age: number;
  check?: boolean;
  stack: string[];
  position: string;
}
export interface Iprops {
  info: IUserInfo;
  onClickBtn: (e: MouseEvent<HTMLButtonElement>) => void;
  click: boolean;
}
