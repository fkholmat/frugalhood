import { useEffect, useState } from 'react'
import Link from 'next/link'

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

function collapseDropdown () {
  document.querySelector('#burger').classList.remove('is-active')
  document.querySelector('#navMenu').classList.remove('is-active')
}

const ListMenuItem = (props) => {
  const menuItem = props.menuItem

  if (menuItem.fields.hasChildMenuItem) {
    return (
      <div className="navbar-item has-dropdown is-hoverable">
        <Link href={{
          pathname: '/[menuSlug]',
          query: { slug: menuItem.fields.slug, id: menuItem.sys.id, name: menuItem.fields.name }
        }}
          as={"/" + menuItem.fields.slug}>
          <a className="navbar-link" onClick={collapseDropdown}>
            {menuItem.fields.name}
          </a>
        </Link>
        {/* .is-hidden-touch will hide dropdown menu on touch devices */}
        <div className="navbar-dropdown"> 
          {menuItem.fields.subMenuItems.map(subMenuItem => (
            <Link key={subMenuItem.fields.slug}
              href={{
                pathname: '/[menuSlug]',
                query: { slug: subMenuItem.fields.slug, id: subMenuItem.sys.id, name: subMenuItem.fields.name }
              }} as={"/" + subMenuItem.fields.slug}>
              <a className="navbar-item" onClick={collapseDropdown}>
                {subMenuItem.fields.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <Link href={{
        pathname: '/[menuSlug]',
        query: { slug: menuItem.fields.slug, id: menuItem.sys.id, name: menuItem.fields.name }
      }}
        as={"/" + menuItem.fields.slug}>
        <a className="navbar-item" onClick={collapseDropdown}>
          {menuItem.fields.name}
        </a>
      </Link>
    )
  }
}

const NavMenu = () => {
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    async function getMenuItems() {
      const contentType = await client.getContentType("menuItem")
      const allMenuItems = await client.getEntries({
        content_type: contentType.sys.id,
        'fields.hasParentMenuItem[nin]': true,
        order: 'fields.orderNumber'
      })
      setMenuItems([...allMenuItems.items])
    }
    getMenuItems()
  }, [])

  return (
    <div id="navMenu" className="navbar-menu">
      <div className="navbar-end">
        {menuItems.length > 0 ? menuItems.map(i =>
          <ListMenuItem key={i.fields.slug} menuItem={i} />
        ) : null}
        <div className="navbar-item">
          <button className="button is-primary is-uppercase">Newsletter</button>
        </div>
      </div>
    </div>
  )
}

export default NavMenu
