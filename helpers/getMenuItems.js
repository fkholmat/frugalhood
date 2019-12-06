const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

exports.getMenuItems = async () => {
  const list = await client.getEntries({
    content_type: 'menuItem'
  })

  return list.items.map(item => ({
    id: item.sys.id,
    name: item.fields.name,
    link: item.fields.slug,
    hasChild: item.fields.hasChildMenuItem
  }))
}