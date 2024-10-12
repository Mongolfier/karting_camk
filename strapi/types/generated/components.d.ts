import type { Schema, Attribute } from '@strapi/strapi';

export interface ServiceCarousel extends Schema.Component {
  collectionName: 'components_service_carousels';
  info: {
    displayName: 'carousel';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    pics: Attribute.Media;
    cost: Attribute.String & Attribute.Required;
    description: Attribute.String;
  };
}

export interface ServiceService extends Schema.Component {
  collectionName: 'components_service_services';
  info: {
    displayName: 'Service';
    icon: 'layer';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    Carousel: Attribute.Component<'service.carousel'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'service.carousel': ServiceCarousel;
      'service.service': ServiceService;
    }
  }
}
