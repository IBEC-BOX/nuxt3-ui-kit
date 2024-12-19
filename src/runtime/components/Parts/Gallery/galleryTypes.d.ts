import type { Attrs, IBaseProps } from "../../../types/global";

export interface IGalleryRow extends IBaseProps {
  blocks: {
    id: number
    title: string
    preview: string
    category?: {
      id: number
      title: string
    }
  }[]
  disableLinks?: boolean
}

interface IGalleryItem {
  id: number;
  image: string;
  active: boolean;
}

export interface IGalleryView extends IBaseProps {
  gallery: IGalleryItem[];
  modelValue: string;
  previewImage: IGalleryItem;
}
