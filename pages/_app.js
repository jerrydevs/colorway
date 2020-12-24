import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import WebsiteLayout from '../layouts/WebsiteLayout'
import appTheme from '../components/Themes'
import GlobalStyles from '../components/globalStyles'

function WebApp({ Component, pageProps, router }) {
  const [dynamicPageThemes, setDynamicPageThemes] = useState([])

  const updateTheme = (dynamicTheme) => {
    const { route } = router

    const pageIndex = dynamicPageThemes.findIndex((page) => page.route === route)

    if (pageIndex === -1) dynamicPageThemes.push({ route, dynamicTheme })
    else dynamicPageThemes[pageIndex] = { route, dynamicTheme }
    setDynamicPageThemes([...dynamicPageThemes])
  }

  const getDynamicPageTheme = (route) => {
    const dynamicPageTheme = dynamicPageThemes.find((pageTheme) => pageTheme.route === route)

    return dynamicPageTheme ? dynamicPageTheme.dynamicTheme : {}
  }

  const { pageTheme } = Component
  const dynamicTheme = getDynamicPageTheme(router.route)

  const theme = {
    ...appTheme,
    ...pageTheme,
    ...dynamicTheme,
  }

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <WebsiteLayout {...Component.layoutProps}>
          <Component
            {...pageProps}
            route={router.route}
            theme={{
              ...theme,
              ...pageTheme,
              ...getDynamicPageTheme(router.route),
            }}
            updateTheme={updateTheme}
          />
        </WebsiteLayout>
      </ThemeProvider>
    </>
  )
}

export default WebApp
