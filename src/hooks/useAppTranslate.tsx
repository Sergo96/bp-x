import { voidFn }     from '@vj-types'
import { tLanguages } from '@vj-types/languages'
import { useRouter }  from 'next/router'
import csCommon       from '../../locales/cs.json'
import enCommon       from '../../locales/en.json'
import ruCommon       from '../../locales/ru.json'


export const useAppTranslate = () => {
  const router = useRouter()

  const locale = (router.locale || 'en') as tLanguages

  const common = {
    en: enCommon,
    ru: ruCommon,
    cs: csCommon,
  }[locale]

  return {
    t             : (name: string) => {
      const text = eval(`common.${name}`)
      return typeof text === 'string' ? text : name
    },
    common,
    router,
    locale,
    changeLanguage: (lang: tLanguages, CB?: voidFn) => router.push(router.pathname, router.pathname, {locale: lang}).then(CB),
  }

}