import HMR from '@roxi/routify/hmr'
import App from './App.svelte'

import { setLocale } from 'yup'
import yupLocalePL from 'yup-locale-pl'

setLocale(yupLocalePL)

const app = HMR(App, { target: document.body }, 'routify-app')

export default app
