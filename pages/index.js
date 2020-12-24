import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import toast, { Toaster } from 'react-hot-toast'
import Router from 'next/router'
import {
  OliviaTheme,
  AzureTheme,
  NightSakuraTheme,
  OniTheme,
  PortTheme,
  IslanderTheme,
  BushidoTheme,
  NautilusTheme,
  NoelTheme,
  DarlingTheme,
} from '../components/Themes'

import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import ColorwayCard from '../components/ColorwayCard'
import themes from '../styles/colors'

const handleThemeChange = (cb) => {
  if (window.location.hash) {
    const href = Router.route
    const as = href
    Router.push(href, as, { shallow: true }).then(() => {
      cb()
    })
  } else {
    cb()
  }
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container = styled.div``

const PageContainer = styled.main`
  display: flex;
  width: 70%;
  flex: column;
  justify-content: center;
  width: 100%;
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.backgroundColor};
  a {
    transition: color 0.2s linear;
    color: ${({ theme }) => theme.fontColor};
    :hover {
      color: ${({ theme }) => theme.accentColor};
    }
  }
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.backgroundColor};
    outline: 1px solid ${({ theme }) => theme.primaryColor};
  }
`

function HomePage({ theme, route, updateTheme }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <PageContainer>
          <Main>
            <Header>Colorway</Header>
            <SubHeader>Find color inspiration from popular keycap sets.</SubHeader>
            <Container>
              {/* GMK Olivia */}
              <ColorwayCard
                colorway={themes.Olivia}
                onThemeChange={() => handleThemeChange(() => updateTheme(OliviaTheme))}
              />

              {/* JTK Night Sakura */}
              <ColorwayCard
                colorway={themes.NightSakura}
                onThemeChange={() => handleThemeChange(() => updateTheme(NightSakuraTheme))}
              />

              {/* JTK Azure */}
              <ColorwayCard
                colorway={themes.Azure}
                onThemeChange={() => handleThemeChange(() => updateTheme(AzureTheme))}
              />

              {/* GMK Oni */}
              <ColorwayCard
                colorway={themes.Oni}
                onThemeChange={() => handleThemeChange(() => updateTheme(OniTheme))}
              />

              {/* Infinikey Port */}
              <ColorwayCard
                colorway={themes.Port}
                onThemeChange={() => handleThemeChange(() => updateTheme(PortTheme))}
              />

              {/* Infinikey Islander */}
              <ColorwayCard
                colorway={themes.Islander}
                onThemeChange={() => handleThemeChange(() => updateTheme(IslanderTheme))}
              />

              {/* GMK Bushido */}
              <ColorwayCard
                colorway={themes.Bushido}
                onThemeChange={() => handleThemeChange(() => updateTheme(BushidoTheme))}
              />

              {/* GMK Nautilus */}
              <ColorwayCard
                colorway={themes.Nautilus}
                onThemeChange={() => handleThemeChange(() => updateTheme(NautilusTheme))}
              />

              {/* GMK Noel */}
              <ColorwayCard
                colorway={themes.Noel}
                onThemeChange={() => handleThemeChange(() => updateTheme(NoelTheme))}
              />

              {/* GMK Darling */}
              <ColorwayCard
                colorway={themes.Darling}
                onThemeChange={() => handleThemeChange(() => updateTheme(DarlingTheme))}
              />
            </Container>
            <Toaster
              position='bottom-center'
              toastOptions={{
                style: {
                  background: theme.secondaryColor,
                },
              }}
            />
          </Main>
        </PageContainer>
      </ThemeProvider>
    </>
  )
}

export default HomePage
