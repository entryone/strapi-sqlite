'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeUpdate: (params, data) => handleOrder(data),
    //beforeCreate: data => handleOrder(data),
    afterFindOne: viewOrder,
    afterFind: viewOrder,
    afterSearch: viewOrder,
    afterCountSearch: viewOrder,
  },
};


async function handleOrder (data) {
  let fullSum = 0
  let fullTitle = []
  data.itemmm.forEach(async item => {
    const product = await strapi.query('product').findOne({ id: item.product })
    const itemSum = item.Price * item.Count
    item.sum = `${product.Name}: ${item.Price} x ${item.Count} = ${itemSum} руб`
    fullSum += itemSum
    fullTitle.push(`${product.Name} x ${item.Count}`)
    data.slug = `${fullTitle.join(', ')}`
    data.totalSumText = `${fullSum} руб`
  })
}


async function viewOrder (data) {
  console.log('data', data)
  let fullSum = 0
  let fullTitle = []
  data.itemmm.forEach(item => {
    const product = item.product
    const itemSum = item.Price * item.Count
    item.sum = `${product.Name}: ${item.Price} x ${item.Count} = ${itemSum} руб`
    fullSum += itemSum
    fullTitle.push(`${product.Name} x ${item.Count}`)
    data.slug = `${fullTitle.join(', ')}`
    data.totalSumText = `${fullSum} руб`
  })
}
