import { ITemplateField } from './template-field.interface';

export interface ITemplate {
  id: string
  industry_id: string
  template: string | ITemplateField[]
}
