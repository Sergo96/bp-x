import { FC } from 'react'


interface iProps {
  value: number | string | boolean
  label: string
  onChange: (value: number | string | boolean) => void
}

export const Option: FC<iProps> = ({value, label, onChange}) => {
  const handleClick = () => {
    onChange(value)
  }

  return (
    <div className="input-select_option" onClick={handleClick}>
      {label}
    </div>
  )
}