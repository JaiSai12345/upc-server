import type { AfterChangeHook } from 'payload/dist/collections/config/types'

import type { Order } from '../../../payload-types'

export const updateUserPurchases: AfterChangeHook<Order> = async ({ doc, req, operation }) => {
  const { payload } = req

  if ((operation === 'create' || operation === 'update') && doc.orderedBy && doc.items) {
    const orderedBy = typeof doc.orderedBy === 'object' ? doc.orderedBy.id : doc.orderedBy

    const user = await payload.findByID({
      collection: 'users',
      id: orderedBy,
    })

    if (user) {
      await payload.update({
        collection: 'users',
        id: orderedBy,
        data: {
          purchases: [],
        },
      })
    }
  }

  return
}
