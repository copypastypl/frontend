import App from './App.svelte'
import 'windi.css'

import { setLocale } from 'yup'
import yupLocalePL from 'yup-locale-pl'

setLocale(yupLocalePL)

const app = new App({
    target: document.body
})

export default app
