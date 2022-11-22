export type Where =
  | {
      [whereKey: string]:
        | {
            [whereOP: string]: [whereValue: any];
          }
        | [whereValue: any];
    }
  | { [whereOP: string]: Array<{ [whereKey: string]: [whereValue: any] }> };

export type Filter = {
  where: Where;
  order: Array<any>;
  limit: number;
  size: number;
};
