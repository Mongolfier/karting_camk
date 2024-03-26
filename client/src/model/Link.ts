export interface Links {
  modes: LinkMode[]
}

export interface LinkMode {
  gmmode: string;
  image: string;
  template: {
    title: string;
    description: string;
    uuid: string;
  };
  text: string;
}