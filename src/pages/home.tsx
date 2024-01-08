import { iHomePage } from '@vj-interfaces/homePageData'
import { FC }        from 'react'
import Link from 'next/link'

interface iProps extends iHomePage {

}

export const Home: FC<iProps> = () => {


  return (
    <div className="home-page ">
      <h1>Home Page</h1>
      <Link href={'/examples'}>examples</Link>
    </div>

  )
}