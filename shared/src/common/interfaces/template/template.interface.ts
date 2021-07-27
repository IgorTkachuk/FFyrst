import { ITemplateField } from './template-field.interface';

export interface ITemplate {
  id?: string
  industryId: number
  template: ITemplateField[]
}
