export enum LEVELS{
  "Infor",
  "Urgent",
  "Blocking"
}

export interface ITask{
  title: string;
  description:string;
  status: boolean;
  level: LEVELS
}
