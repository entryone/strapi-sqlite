'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async addFromCart(ctx) {
    console.log('data', ctx.request.body)
    const {name, phone, address, items} = ctx.request.body
    const prods = {}
    const products = items.map(item => item.product)
    const pr = await strapi.query('product')
      .find({id_in: products})
    pr.forEach(prod => {
      prods[prod.id] = prod
    })
    let fullSum = 0
    let fullTitle = []
    let description = ''
    let totalSumText = ''
    ctx.request.body.items.forEach(function (item) {
      const product = prods[item.product]
      item.Price = product.Price
      const itemSum = product.Price * item.Count
      item.sum = `${product.Name}: ${product.Price} x ${item.Count} = ${itemSum} руб`
      fullSum += itemSum
      fullTitle.push(`${product.Name} x ${item.Count}`)
      description = `${fullTitle.join(', ')}`
      totalSumText = `${fullSum} руб`
    })

    const order = await strapi.query('order').create({
      customerName: name,
      phone,
      address,
      description,
      totalSumText,
      item: ctx.request.body.items,
    });
    await senEmail(order)
    return {
      id: order.id
    };
  },
};


async function senEmail (order) {
  return await strapi.plugins['email'].services.email.send({
    to: 'a.i.kulinich@gmail.com',
    from: 'a.i.kulinich@gmail.com',
    subject: 'Новый заказа №' + order.id,
    text: `${order.description}
Сумма: ${order.totalSumText}
Имя: ${order.customerName}
Телефон: ${order.phone}
Адрес: ${order.address}`,
  });
}
