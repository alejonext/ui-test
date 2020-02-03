export type Vote = 1 | -1;

export interface Votes {
  // update: Date;
  id: string;
  user?: Vote;
}
