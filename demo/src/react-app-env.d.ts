/// <reference types="react-scripts" />

interface IPost {
  id: number;
  name: string;
  cb: (id: number) => void;
}

interface IPosts {
  posts: IPost[];
}
