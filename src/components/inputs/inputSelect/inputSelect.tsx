import { Input }  from '@vj-components/inputs'
import { Option } from '@vj-components/inputs/inputSelect/core'
import { FC }     from 'react'


export interface iOptions {
  value: number | string | boolean
  label: string
}

interface iProps {
  defaultValue?: number | string | boolean
  onChange: (value: number | string | boolean) => void
  onSearch?: () => void
  options: iOptions[]
}

export const InputSelect: FC<iProps> = ({options, onChange}) => {
  return (
    <div className="input-select">
      <div className="input-select_input">
        <Input/>
      </div>
      <div className="input-select_options">
        {
          options.map(option => <Option key={option.label} {...{onChange, ...option}} />)
        }
      </div>
    </div>
  )
}