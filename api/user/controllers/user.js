'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async register(ctx) {
    console.log('ctx', ctx)
    let user = await strapi.plugins['users-permissions'].services.user.add({
      blocked: false,
      confirmed: true,
      username: 'new_username',
      email: 'test@testemail.com',
      password: 'secretpassword', //will be hashed automatically
      provider: 'local', //provider
      created_by: 1, //user admin id
      updated_by: 1, //user admin id
      role: 1 //role id
    });
    console.log('user', user)
  },
};


