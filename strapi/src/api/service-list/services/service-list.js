'use strict';

/**
 * service-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-list.service-list');
