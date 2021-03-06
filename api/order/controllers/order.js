'use strict';
const TelegramBot = require('node-telegram-bot-api');
const token = '756258457:AAEsOHkTF61dZ_-_tCsMkmaCMuLykp06pGQ';
const bot = new TelegramBot(token, {polling: false});
const kulinich_chatId = '429692685'
const manager_chatId = '1574267841'
/*
bot.on('message', (msg) => {
  console.log(msg);
  const chatId = msg.chat.id;
  const text = msg.text;
  bot.sendMessage(chatId, 'Received your message: '+text, {parse_mode: 'html'});
});
*/

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async addFromCart(ctx) {
    console.log('data', ctx.request.body)
    const {name, phone, address, items} = ctx.request.body

    const prods = {}
    const products = items.filter(_prod => _prod.type !== 'set').map(item => item.product)
    const pr = await strapi.query('product')
      .find({id_in: products})
    pr.forEach(prod => {
      prods[prod.id] = prod
    })

    const sets = {}
    const setsIDs = items.filter(_prod => _prod.type === 'set').map(item => item.product)
    const _set = await strapi.query('product-set')
      .find({id_in: setsIDs})
    _set.forEach(st => {
      sets[st.id] = st
    })

    const ct = await strapi.query('city').findOne({id: parseInt(ctx.request.body.city)})
    console.log('city', ct, ctx.request.body.city)
    const deliveryPrice = ct.deliveryPrice
    let fullSum = deliveryPrice
    let fullTitle = []
    let description = ''
    let totalSumText = ''
    console.log('sets', sets)
    ctx.request.body.items.forEach(function (item) {
      if (item.type !== 'set') {
        const product = prods[item.product]
        item.Price = product.Price
        const itemSum = product.Price * item.Count
        item.sum = `${product.Name}: ${product.Price} x ${item.Count} = ${itemSum} руб`
        fullSum += itemSum
        fullTitle.push(`${product.Name} x ${item.Count}`)
        description = `${fullTitle.join(', \n')}`
        totalSumText = `${fullSum} руб`
      } else {
        const set = sets[item.product]
        item.Price = set.price
        const itemSum = set.price * item.Count
        item.sum = `${set.name}: ${set.price} x ${item.Count} = ${itemSum} руб`
        fullSum += itemSum
        fullTitle.push(`${set.name} x ${item.Count}`)
        description = `${fullTitle.join(', \n')}`
        totalSumText = `${fullSum} руб`
      }
    })

    description = description + ', \nДоставка ' + deliveryPrice +' руб'

    const order = await strapi.query('order').create({
      customerName: name,
      phone,
      address,
      description,
      totalSumText,
      comment: ctx.request.body.comment,
      city: ctx.request.body.city || 1,
      deliveryPrice: deliveryPrice || 15,
      item: ctx.request.body.items,
    });
    await senEmail(order)
    return {
      id: order.id
    };
  },
};


async function senEmail (order) {
  const text = getTelegramMessageText(order)
  bot.sendMessage(kulinich_chatId, text, {parse_mode: 'html'});
  bot.sendMessage(manager_chatId, text, {parse_mode: 'html'});
  return await strapi.plugins['email'].services.email.send({
    to: 'a.i.kulinich@gmail.com',
    from: 'info@la-supreme.ru',
    subject: 'Новый заказ №' + order.id,
    html: getMailMessageText(order),
  });
}

function getTelegramMessageText (order) {
  return `===========
№ <b>${order.id}</b>
${order.description.trim()}

Сумма: <b>${order.totalSumText}</b>
Имя: ${order.customerName}
Телефон: ${order.phone}
Куда: ${order.city.name}
Адрес: ${order.address}
Комментарий: ${order.comment}
===========`
}

function getMailMessageText (order) {
  return `
№ <b>${order.id}</b><br/>
${order.description.trim()}<br/>

Сумма: <b>${order.totalSumText}</b><br/>
Имя: ${order.customerName}<br/>
Телефон: ${order.phone}<br/>
Куда: ${order.city.name}<br/>
Адрес: ${order.address}<br/>
Комментарий: ${order.comment}`
}
