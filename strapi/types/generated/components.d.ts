import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticlesArticle extends Schema.Component {
  collectionName: 'components_articles_articles';
  info: {
    displayName: 'Article';
    icon: 'briefcase';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Banner: Attribute.Media;
    Content: Attribute.Blocks & Attribute.Required;
    PublishDate: Attribute.DateTime & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'articles.article': ArticlesArticle;
    }
  }
}
