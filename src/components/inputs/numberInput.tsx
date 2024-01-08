import { MinusIcon, PlusIcon }                       from '@vj-icons'
import classNames                                    from 'classnames'
import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'


interface iProps {
  active?: boolean
  errorText?: string
  defaultValue?: number
  className?: string
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  setValue: Dispatch<SetStateAction<number>>
  min?: number
  max?: number
}

export const NumberInput: FC<iProps> = ({
                                          className = '',
                                          active,
                                          disabled,
                                          errorText,
                                          defaultValue = 0,
                                          onChange,
                                          setValue,
                                          min = 0,
                                          max = Infinity,
                                          ...props
                                        }) => {
  const classInput = classNames({
    ['input']                : true,
    ['input-number']         : true,
    ['input-active']         : active,
    ['input-number-disabled']: disabled,
    ['input-error']          : errorText,
    [className]              : className,
  })

  const handleDecrement = () => {
    if (!disabled && defaultValue > min)
      setValue(prevState => --prevState)
  }

  const handleIncrement = () => {
    if (!disabled && defaultValue < max)
      setValue(prevState => ++prevState)
  }

  const handleChange = onChange ? onChange : (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    setValue(+value)
  }

  return (
    <div className={'wrapper'}>
    <span className={classInput}>
       <MinusIcon className={'icon'} onClick={handleDecrement}/>
       <input
         className={'inputTag'}
         type={'number'}
         value={defaultValue}
         onChange={handleChange}
         {...{disabled, ...props}}
       />
      <PlusIcon className={'icon'} onClick={handleIncrement}/>
    </span>
      {
        errorText ?
          <span className={'error'}>{errorText}</span>
          :
          null
      }
    </div>

  )
}
