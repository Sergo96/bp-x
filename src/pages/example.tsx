import { Button }                            from '@vj-components/button'
import { Textarea }                          from '@vj-components/textArea'
import { Typography }                        from '@vj-components/typography'
import { Input, NumberInput, PasswordInput } from '@vj-components/inputs'
import { FC, useState }                      from 'react'


interface iProps {

}

export const Example: FC<iProps> = () => {
  const [value1, setValue1] = useState<number>(0)
  const [value2, setValue2] = useState<number>(0)
  const [value3, setValue3] = useState<number>(0)
  return (
    <div className={'example-page container'}>

      Button
      <div className={'example-item'}>
        <span className={'label'}>
          Default
          <Button>Registration</Button>
        </span>
        <span className={'label'}>
          Active
          <Button active>Registration</Button>
        </span>
        <span className={'label'}>
          Disabled
          <Button disabled>Registration</Button>
        </span>
        <span className={'label'}>
          Link
          <Button variant={'link'}>Registration</Button>
        </span>
      </div>

      Typography
      <div className={'example-item example-item-typographies'}>
        <span className={'label'}>
          H1
          <Typography variant="H1" component="h1" value={'example H1'}/>
        </span>
        <span className={'label'}>
          H2
          <Typography variant="H2" component="h2" value={'example H2'}/>
        </span>
        <span className={'label'}>
          H3
          <Typography variant="H3" component="h3" value={'example H3'}/>
        </span>
        <span className={'label'}>
          H4
          <Typography variant="H4" component="span" value={'example H4'}/>
        </span>

      </div>

      Inputs
      <div className={'example-item'}>
        <span className={'label'}>
          Default
          <Input placeholder={'Text'}/>
        </span>
        <span className={'label'}>
          Active
          <Input active defaultValue={'Text'}/>
        </span>
        <span className={'label'}>
          Disabled
          <Input placeholder={'Text'} defaultValue={'Text'} disabled/>
        </span>
        <span className={'label'}>
          Error
          <Input placeholder={'Text'} defaultValue={'Text'} errorText={'Error text'}/>
        </span>
      </div>
      Inputs password
      <div className={'example-item'}>
        <span className={'label'}>
          Default
          <PasswordInput placeholder={'Text'}/>
        </span>
        <span className={'label'}>
          Active
          <PasswordInput active defaultValue={'Text'}/>
        </span>
        <span className={'label'}>
          Disabled
          <PasswordInput placeholder={'Text'} defaultValue={'Text'} disabled/>
        </span>
        <span className={'label'}>
          Error
          <PasswordInput placeholder={'Text'} defaultValue={'Text'} errorText={'Error text'}/>
        </span>
      </div>
      Inputs number
      <div className={'example-item'}>
        <span className={'label'}>
          Default
          <NumberInput defaultValue={value1} setValue={setValue1}/>
        </span>
        <span className={'label'}>
          Active
          <NumberInput active defaultValue={value2} setValue={setValue2}/>
        </span>
        <span className={'label'}>
          Disabled
          <NumberInput defaultValue={value3} setValue={setValue3} disabled/>
        </span>
        <span className={'label'}>
          Error
          <NumberInput defaultValue={value1} setValue={setValue1} errorText={'Error text'}/>
        </span>
      </div>
      Textarea
      <div className={'example-item'}>
        <span className={'label'}>
          Default
          <Textarea/>
        </span>
        <span className={'label'}>
          Active
          <Textarea active/>
        </span>
        <span className={'label'}>
          Resized
          <Textarea resizedVertical/>
        </span>
        <span className={'label'}>
          Disabled
          <Textarea disabled value={'sdsdsa'}/>
        </span>
        <span className={'label'}>
          Error
          <Textarea  errorText={'Error text'}/>
        </span>
      </div>
    </div>

  )
}