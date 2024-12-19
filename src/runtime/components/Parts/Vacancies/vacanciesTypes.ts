import type { Attrs, IBaseProps } from "../../../types/global";

interface imageVacancies {
  attrs?: Attrs
  image: string
}

export interface IVacanciesErg extends IBaseProps {
  backgroundImage: imageVacancies
  button: {
    attrs?: Attrs
    image: string
    imageAttrs: Attrs
    text: string
    to: string
  }
  leftImage: imageVacancies
  rightImage: imageVacancies
  chip: {
    text: string
    attrs?: Attrs
  }
  title: string
  subTitle: string
  textBody: string
}
