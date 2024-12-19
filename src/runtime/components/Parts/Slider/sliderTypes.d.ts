import type { Attrs, IBaseProps, IChips } from "../../../types/global";

export interface ISliderDefault {
  rounded: string
  staticChips: IChips
  height: string
  slides: {
    id: number | string
    backgroundImg?: string,
    backgroundImgAlt?: string
    img: {
      src: string
      alt?: string
      attrs?: Attrs
    }
    textBlockAttrs?: Attrs
    chip: IChips
    titleTag?: 'p' | 'span' | string
    titleAttrs?: Attrs
    title: string
    subtitle: string
    subTitleHTML?: string
    subTitleAttrs?: Attrs
    numbers: {
      itemAttrs?: Attrs
      numAttrs?: Attrs
      subtitleAttrs?: Attrs
      number: string | number
      postfix: string
      subtitle: string
    }[]
    bodySlot: any
    buttons: {
      id: number
      attrs?: Attrs
      text: string
    }[]
  }[]
  slidesRounded: string
  sliderBackgroundImage: string
  sliderBackgroundImageZoom: false
  sliderBackgroundImageZoomScale: number
  sliderContainer: false
  sliderPagination: false
  sliderPaginationCenter: false
  sliderPaginationType: 'bullets' | 'dot'
  sliderPaginationActiveVariant: string
  sliderPeeking: false
  controlButtonsAlign: 'bottom' | 'right' | 'center' | 'left-bottom'
  showButtons: boolean,
  controlScroll: boolean
  controlButtonInSlides: boolean
}
