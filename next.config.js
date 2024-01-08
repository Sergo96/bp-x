/** @type {import('next').NextConfig} */

module.exports = {
  i18n     : {
    locales      : ['en', 'ru', 'cs'],
    defaultLocale: 'en',
  },
  react    : { useSuspense: false },
  swcMinify: false,
}
