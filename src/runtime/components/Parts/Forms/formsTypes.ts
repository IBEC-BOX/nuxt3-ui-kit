import type { Attrs, Breakpoints, Maska, IBaseProps, ISocials, IContacts } from "../../../types/global";

export interface IFormsDefault extends IBaseProps {
  title?: string
  subtitle?: string
  commentary?: {
    id: number
    attrs?: Attrs
  }
  styleForm?: 'standard' | 'call' | 'contacts' | 'onlyForm'
  bigImage?: string
  smallImage?: string
  altImage?: string
  button?: {
    attrs?: Attrs
    text?: string
  }
  checkbox?: {
    label: string
    attrs?: Attrs
  }
  inputs?: {
    colsAttrs?: Breakpoints,
    attrs?: Attrs
    maska: Maska
  }[]
  combobox?: {
    attrs?: Attrs
  }
  socials?: ISocials[]
  infoCompany?: {
    icon: string
    attrs?: Attrs
    text?: string
  }[]
  contacts?: IContacts[]
  switchContentOnValid?: boolean
  switchContentButton?: {
    attrs?: Attrs
    image?: string
    alt?: string
    imageAttrs?: Attrs
    text?: string
  }
}
