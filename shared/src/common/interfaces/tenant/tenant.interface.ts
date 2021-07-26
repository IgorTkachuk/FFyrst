export interface ITenant {
  id?: string
  name: string
  domainURL: string;
  supportEmail?: string;
  industry: number;
  phoneNumber?: string;
  invoiceAddress?: string;
  useCred?: boolean;
  credURL?: string;
  logoURL: string;
  createdAt: Date
  updatedAt: Date
}
