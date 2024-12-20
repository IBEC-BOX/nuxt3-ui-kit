import type { Attrs, IBaseProps, IChips } from "../../../types/global";

export interface ISliderSlide {
  id: number | string;
  backgroundImg?: string;
  backgroundImgAlt?: string;
  img?: {
    src: string;
    alt?: string;
    attrs?: Attrs;
  };
  textBlockAttrs?: Attrs;
  chip?: IChips;
  titleTag?: 'p' | 'span' | string;
  titleAttrs?: Attrs;
  title: string;
  subtitle?: string;
  subTitleHTML?: string;
  subTitleAttrs?: Attrs;
  numbers?: {
    itemAttrs?: Attrs;
    numAttrs?: Attrs;
    subtitleAttrs?: Attrs;
    number: string | number;
    postfix?: string;
    subtitle: string;
  }[];
  bodySlot?: any;
  buttons?: {
    id: number;
    attrs?: Attrs;
    text: string;
  }[];
}

export interface ISliderDefault extends IBaseProps {
  rounded?: string;
  staticChips?: IChips;
  height?: string;
  slides: ISliderSlide[];
  slidesRounded?: string;
  sliderBackgroundImage?: string;
  sliderBackgroundImageZoom?: boolean;
  sliderBackgroundImageZoomScale?: number;
  sliderContainer?: boolean;
  sliderPagination?: boolean;
  sliderPaginationCenter?: boolean;
  sliderPaginationType?: 'bullets' | 'dot';
  sliderPaginationActiveVariant?: string;
  sliderPeeking?: boolean;
  controlButtonsAlign?: 'bottom' | 'right' | 'center' | 'left-bottom';
  showButtons?: boolean;
  controlScroll?: boolean;
  controlButtonsSize?: 'small' | 'medium' | 'large';
  controlButtonInSlides?: boolean;
}
