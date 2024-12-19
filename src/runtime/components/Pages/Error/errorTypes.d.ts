import type { IBaseProps } from "../../../types/global";

export interface IErrorErg extends IBaseProps {
  error: {
    statusCode: number,
    data: {
      path: string
    }
    message: string
    stack?: string
    statusMessage: string
    url: string
  },
  title: string,
  subtitle: string
  otherTitle?: string
  textButton: string
}
