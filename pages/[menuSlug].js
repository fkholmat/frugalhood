import { useRouter } from 'next/router'

const MenuPage = () => {
  const router = useRouter(); // router.query will be populated during export

  return (
      <div className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-3">{router.query.name}</h1>
            <h2 className="subtitle is-size-5">ID: {router.query.id}</h2>
            <button className="button is-uppercase">Learn More</button>
          </div>
        </div>
      </div>
  )
}

MenuPage.getInitialProps = async (ctx) => {
  return {} // does not need to read query from ctx
}

export default MenuPage