import { ITemplateField } from "~/common/interfaces";

class TemplateCheck {

  public required(template: ITemplateField[], data: Record<string, any>): void {
    template.forEach(field => {
      if(!Object.hasOwnProperty.call(data, field.name)) {
        throw new Error(`Template Error: ${field} has missed from object`);
      }
    })
  }

  public validate(template: ITemplateField[], data: Record<string, any>): void {
    template.forEach(field => {
      const {name, validation} = field;
      const regExp = new RegExp(validation || '.*', 'i');
      const isMatch = regExp.test(data[name]);
      if(isMatch) {
        throw new Error(`Template Error: ${name} has invalid value`);
      }
    })
  }

  public bookingDetails(template: ITemplateField[], details: Record<string, any>): void {
    this.required(template, details);
    this.validate(template, details);
  }
}

const templateCheck = new TemplateCheck();

export { templateCheck }
