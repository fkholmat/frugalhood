const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

const contentTypeID = "menuItem"

async function getAllMenuItems() {
  const allMenuItems = await client.getEntries({
    content_type: contentTypeID
  })

  return allMenuItems.items.map(item => ({
    id: item.sys.id,
    name: item.fields.name,
    link: item.fields.slug,
    hasChild: item.fields.hasChildMenuItem
  }))
}

module.exports = {getAllMenuItems}