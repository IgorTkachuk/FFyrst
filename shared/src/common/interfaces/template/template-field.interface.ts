export interface ITemplateField {
  name: string
  type: string
  label?: string
  options?: string[]
  placeholder?: string
  validation?: string
  isReadOnly: boolean
  defaultValue?: string
}
