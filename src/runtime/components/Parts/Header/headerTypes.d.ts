import type { Attrs, IBaseProps } from "../../../types/global";

export interface IHeaderErg extends IBaseProps {
  logo: {
    link: string
    url: string
    maxWidth: number
    height: number
    alt?: string
    attrs?: Attrs
  }
  elevation: number
  menu: {
    id: number | string
    title: string
    to: string
    anchor: string
    type?: 'anchor' | string
  }[]
  menuMobile: {
    title: string
    target?: string
    id: number | string
    icon?: string
    iconAttrs?: Attrs
    href?: string
    to?: string
  }[]
  setLang: {
    code: string
    name: string
  }[]
  activeLang: string
  textBtn: string
  bgClassHeader: string
  colorClassMenu: string
  burger: boolean
  showButton: boolean
  columnGapList: number
  classMenuSelect: string
  wordButtonMobile: string
  colorActiveLangMobile: string
  colorLangMobile: string
  colorBurger: string
  colorBurgerOpen: string
}
