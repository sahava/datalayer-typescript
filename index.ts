import {
  DataLayerObject,
  EcommerceObject,
} from './types';

const pushToDataLayer = (obj: DataLayerObject) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(obj);
};

const setUserData = (userId: string) => {
  pushToDataLayer({
    event: 'customUser',
    userData: {
      userId,
    },
  });
};

const createPageEvent = (path: string) => {
  const obj: DataLayerObject = {
    event: 'customPage',
    pageData: {
      path,
    },
  };
  pushToDataLayer(obj);
};

const createEcommerceEvent = data => {
  const obj: EcommerceObject = {
    event: 'customEcommerce',
    transactionId: data.id,
    transactionAffiliation: data.affiliation,
    transactionTotal: data.revenue,
    transactionShipping: data.shipping,
    transactionCurrency: data.currency,
  };
  pushToDataLayer(obj);
};

const createGenericEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number,
  nonInteraction?: boolean,
) => {
  const obj: DataLayerObject = {
    event: 'customEvent',
    eventData: {
      category,
      action,
      label,
      value,
      nonInteraction,
    },
  };
  pushToDataLayer(obj);
};

export default {
  createPageEvent,
  createEcommerceEvent,
  createGenericEvent,
  setUserData,
};
