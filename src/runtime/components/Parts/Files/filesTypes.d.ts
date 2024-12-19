import type { Attrs, IBaseProps } from "../../../types/global";

export interface IFilesErg extends IBaseProps {
  contentTabs: {
    year: string
    data: {
      title: string
      extension: string
      file: {
        mime?: string
        size: number
        url: string
      }
      file_icon: string
      file_size_kb: string
      link?: string | null
      published_at?: string
      published_file?: string
    }[]
  }[]
  theme?: 'white' | 'black' | string
  colorThemeWhite?: string
  colorThemeBlack?: string
  colorBackgroundImageWhite?: string
  colorBackgroundImageBlack?: string
}
