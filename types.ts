export type DataLayerEventName =
  | 'customUser'
  | 'customEvent'
  | 'customPage'
  | 'customEcommerce';
  
interface UserData {
  userId: string | undefined;
}

interface EventData {
  category: string;
  action: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
}

interface TransactionProduct {
  sku: string;
  name: string;
  category?: string;
  price: string;
  quantity: string;
}

interface PageData {
  path: string;
}

export interface DataLayerObject {
  event: DataLayerEventName;
  userData?: UserData;
  eventData?: EventData;
  pageData?: PageData;
}

export interface EcommerceObject extends DataLayerObject {
  transactionId: string;
  transactionTotal: string;
  transactionAffiliation?: string;
  transactionShipping?: string;
  transactionTax?: string;
  transactionCurrency?: string;
  transactionProducts?: TransactionProduct[];
}
