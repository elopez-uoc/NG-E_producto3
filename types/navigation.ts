
export type RootStackParamList = {
  Home: undefined;
  Detail: { item: Item };
  Player: { item: Item };
};

export interface Item {
  id: string;
  text?: string;
  title?: string;
  description?: string;
  content?: string;
  mediaUrl?: string;
  createdAt?: any;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}