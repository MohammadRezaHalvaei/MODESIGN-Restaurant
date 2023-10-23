type Posts =
  | { desc: string; id: number; src: string; subTitle: string; title: string }
  | undefined;

type FetchDataType =
  | {
      address: string;
      email: string;
      exp: string;
      img: string;
      name: string;
      role: string;
    }
  | undefined;
