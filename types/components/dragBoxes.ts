export interface item {
  id: number;
  text: string;
  isDraggable: boolean;
  boxId: 1 | 2;
}

export type ItemsType = item[];
