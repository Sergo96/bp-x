import { EyeCloseIcon }                      from '@vj-icons'
import classNames                            from 'classnames'
import { FC, InputHTMLAttributes, useState } from 'react'


interface iProps extends InputHTMLAttributes<HTMLInputElement> {
  active?: boolean
  type?: 'text' | 'password'
  errorText?: string
}

export const PasswordInput: FC<iProps> = ({
                                            type ,
                                            className = '',
                                            active,
                                            disabled,
                                            errorText,
                                            ...props
                                          }) => {
  const classInput = classNames({
    ['input']         : true,
    ['password-input']: true,
    ['password-input-active']  : active,
    ['input-disabled']: disabled,
    ['input-error']   : errorText,
    [className]       : className,
  })

  const [visible, setVisible] = useState<boolean>(false)

  const handleChangeVisible = () => {
    setVisible(prevState => !prevState)
  }

  const Icon = visible ? <EyeCloseIcon onClick={handleChangeVisible}/> : <EyeCloseIcon onClick={handleChangeVisible}/>
  const inputType = visible ? 'text' : 'password'

  return (
    <div className={'wrapper'}>
      <span className={classInput}>
        <input  className={'inputTag'} type={type || inputType}  {...{disabled, ...props}}/>
        <span className={'icon'}>
           {Icon}
        </span>
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
