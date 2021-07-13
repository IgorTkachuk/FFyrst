export interface AuthServiceRes<T>  {
  code: number,
  data: string | T
}
