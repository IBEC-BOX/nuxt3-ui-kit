import type { Attrs, IBaseProps, ISocials, IContacts } from "../../../types/global";

export interface IFooterErg extends IBaseProps {
  contacts: IContacts[]
  socials?: ISocials[]
  bgClass: string
  copyright?: string
  copyrightMade?: string
  copyrightCert?: {
    title: string
    cert: string
  }
}
