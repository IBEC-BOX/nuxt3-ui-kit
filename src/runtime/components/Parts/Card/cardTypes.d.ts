import type { Attrs, IBaseProps } from "../../../types/global";

export interface ICardDefault extends IBaseProps {
  statusVacancy?: {
    id: number
    status: 'error' | 'success' | 'warning' | 'info' | 'loading'
    text: string
  }[]
  image: {
    src: string
    attrs?: Attrs
  }
  textImage: {
    src: string
    attrs?: Attrs
  }
  horizontalCard: boolean
  dateAuthorRight: boolean
  hoverText: boolean
  gap: number
  styleCard: string
  variantCard: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain"
  positionImageVacancy?: 'start' | 'end'
  title: string
  subtitle: string
  price: string
  text: string
  textBody: string
  date: string
  author: string
  city: string
  modal?: boolean
  modalImg?: string
  modalWidth?: number
  horizontalWidthImage?: number
}

export interface ICardErgNews extends IBaseProps {
  card: {
    link: string
    image: string
    title: string
    date: string
  }
}

export interface ICardScale extends IBaseProps {
  cards: {
    id: number
    background: string
    icon: string
    title: string
    chip: string
  }[]
}
