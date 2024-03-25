'use strict';

/**
 * telephone service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::telephone.telephone');
