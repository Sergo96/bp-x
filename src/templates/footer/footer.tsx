import { useAppTranslate } from '@vj-hooks/useAppTranslate'
import Link                from 'next/link'
import { FC }              from 'react'


const links = [
  {
    href   : '/privacy-policy',
    textKey: 'footer.policy',
  },
  {
    href   : '/terms-of-use',
    textKey: 'footer.terms',
  },
]

interface iProps {
  scrolled?: boolean
}

export const Footer: FC<iProps> = ({scrolled}) => {
  const {t} = useAppTranslate()
  return (
    <footer className={scrolled ? 'visible' : ''}>
      <div className={'container'}>
        <p className={'inline copyright'}>
          © 2022 BP. powered by Ven
        </p>
        <div className={'terms-and-policy'}>
          {
            links.map(({href, textKey}, index) =>
              <Link key={index} href={href}>
                <a>
                  <p>
                    {t(textKey)}
                  </p>
                </a>
              </Link>,
            )
          }
        </div>
      </div>
    </footer>
  )
}