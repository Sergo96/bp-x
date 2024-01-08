import { iContactData } from '@vj-interfaces/contactUs'
import { FC } from 'react'


interface iProps extends iContactData{

}

export const Contact: FC<iProps> = ( ) => {

  return (
    <div className={'contact-page'}>
      <div className={'container '}>
        <h1>Contact Page</h1>

      </div>



    </div>
  )
}
