export type Attrs = Record<string, any>
export type Maska = string | string[] | ((value: string) => string) | {
  mask: string | string[];
  tokens?: Record<string, { pattern: RegExp; transform?: (char: string) => string; }>;
};
export type Breakpoints = {
  cols: string | number
  xs: string | number
  sm: string | number
  md: string | number
  lg: string | number
  xl: string | number
  xxl: string | number
}

export interface IChips {
  attrs?: Attrs
  text: string
}

export interface IBaseProps {
  [key: string]: any;
}

export interface ISocials {
  id: number
  img: string
  link: string
  alt?: string
}

export interface IContacts {
  title: string
  phone: string
  imagePhone: string
  mail: string
  imageMail: string
  location: string
  imageLocation: string
}[]
