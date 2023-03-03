import { Message } from '@/components/message/message'
import GlobalStyle from '@/theme/globals'
import { UiProvider } from '@/theme/providers/uiProvider'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UiProvider>
        <GlobalStyle />
        <Message />
        <Component {...pageProps} />
      </UiProvider>
    </>
  )

}
