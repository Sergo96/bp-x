import { iAboutPage } from '@vj-interfaces/about'
import { FC }         from 'react'


interface iProps extends iAboutPage {


}

export const About: FC<iProps> = () => {

  return (
    <div className={'about-page '}>
      <h1>About</h1>

    </div>

  )
}