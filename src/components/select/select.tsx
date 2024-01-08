import { Input } from '@vj-components/inputs'
import { FC }    from 'react'


interface iOptions {
  name:string
  value:string | number | boolean
}

interface iProps {
  options:iOptions[]
}

const InputSelect:FC<iOptions> = ({name,value}) => {
  return (
    <span className={'select-item'}>
      {name}
    </span>
  )
}


export const Select: FC<iProps> = ({options}) => {
  return (
    <div className={'wrapper-select'}>
      <div className={'input'}>
        <Input />
      </div>
      <div className={'select'}>
        {
          options.map(item => (
            <InputSelect key={item.name} {...item} />
          ))
        }
      </div>
    </div>
  )
}
