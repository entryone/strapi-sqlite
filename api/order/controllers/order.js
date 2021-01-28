'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async addFromCart(ctx) {
    console.log('data', ctx.request.body)
    const prods = {}
    const products = ctx.request.body.items.map(item => item.product)
    const pr = await strapi.query('product')
      .find({id_in: products})
    pr.forEach(prod => {
      prods[prod.id] = prod
    })
    let fullSum = 0
    let fullTitle = []
    let slug = ''
    let totalSumText = ''
    ctx.request.body.items.forEach(function (item) {
      const product = prods[item.product]
      item.Price = product.Price
      const itemSum = product.Price * item.Count
      item.sum = `${product.Name}: ${product.Price} x ${item.Count} = ${itemSum} руб`
      fullSum += itemSum
      fullTitle.push(`${product.Name} x ${item.Count}`)
      slug = `${fullTitle.join(', ')}`
      totalSumText = `${fullSum} руб`
    })
    const order = await strapi.query('order').create({
      slug,
      totalSumText,
      itemmm: ctx.request.body.items,
    });
    await senEmail()
    return {
      id: order.id
    };
  },
};


async function senEmail () {
  await strapi.plugins['email'].services.email.send({
    to: 'a.i.kulinich@gmail.com',
    from: 'admin@strapi.io',
    subject: 'Comment posted that contains a bad words',
    text: `
          The comment #555 contain a bad words.

          Comment:
        `,
  });
}
