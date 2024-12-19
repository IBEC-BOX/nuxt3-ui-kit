import type { Attrs, IBaseProps, Breakpoints } from "../../../types/global";

export interface IModalDefault extends IBaseProps {
  modelValue: boolean
  heading: string
  text: string
  icon: string
  rounded: string
  buttons: {
    id: number
    text: string
    attrs?: Attrs
  }[]
  buttonsDirection: 'row' | 'column' | string
  iconCenter: boolean
  iconBg: string
  img: string
  imgOnly: boolean
  imgRounded: Breakpoints
  imgFluid: boolean
}
