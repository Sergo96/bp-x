import classNames                  from 'classnames'
import { FC, InputHTMLAttributes } from 'react'


interface iProps extends InputHTMLAttributes<HTMLInputElement> {
  active?: boolean
  errorText?: string
}

export const Input: FC<iProps> = ({
                                    type = 'text',
                                    className = '',
                                    active,
                                    disabled,
                                    errorText,
                                    ...props
                                  }) => {
  const classInput = classNames({
    ['input']         : true,
    ['input-active']  : active,
    ['input-disabled']: disabled,
    ['input-error']   : errorText,
    [className]       : className,
  })
  return (
    <div className={'wrapper'}>
      <span className={classInput}>
        <input className={'inputTag'} type={type}  {...{disabled, ...props}}/>
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
