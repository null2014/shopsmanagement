import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
// import { key2Culture } from '@/utils'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)

// https://www.cnblogs.com/scode2/p/9098579.html
// https://www.jianshu.com/p/df2550c6f1be
// https://blog.csdn.net/Dream_xun/article/details/82743762
const messages = {
  'en': {
    ...enLocale,
    ...elementEnLocale
  },
  'zh': {
    ...zhLocale,
    ...elementZhLocale
  }
}
export function getLanguage() {
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) return chooseLanguage

  // if has not choose language
  let localeLang = 'zh'
  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      // return locale
      localeLang = locale
      break
    }
  }

  // save to cookie
  Cookies.set('language', localeLang)
  // const culture = key2Culture(localeLang)
  // Cookies.set('.AspNetCore.Culture', `c=${culture}|uic=${culture}`)
  Cookies.set('.AspNetCore.Culture', `c=${localeLang}|uic=${localeLang}`)

  return localeLang
}
const i18n = new VueI18n({
  // set locale
  // options: en | zh | zh-tw
  locale: getLanguage(),
  // https://kazupon.github.io/vue-i18n/zh/guide/fallback.html
  fallbackLocale: 'en',
  silentFallbackWarn: true,
  silentTranslationWarn: true,
  // set locale messages
  messages
})

export default i18n
