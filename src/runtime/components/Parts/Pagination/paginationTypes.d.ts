import type { IBaseProps } from "../../../types/global";

export interface IPaginationDefault extends IBaseProps {
  paginationLastPage: number
  paginationTotalVisible: number
  textButtonLeftPagination: string
  textButtonRightPagination: string
  iconButtonLeftPagination: string
  iconButtonRightPagination: string
  sidesButton: boolean
  wordMobilePagination: string
  ellipsisMobilePagination: string
}
