'use strict';

/**
 * retrogame service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::retrogame.retrogame');
