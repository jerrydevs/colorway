import React, { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import toast from 'react-hot-toast'
import { Transition } from 'react-transition-group'

import Button from './Button'
import ColorSlider from './ColorSlider'
import { getColorsCSSVars } from '../utils/getColorsCSSVars'
import { getColorsJSON } from '../utils/getColorsJSON'
import { copyToClipboard } from '../utils/copyToClipboard'

const Title = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.fontColor};
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  margin-top: 10rem;
  background-color: ${({ theme }) => theme.backgroundSecondaryColor};
  padding: 4rem;
  border: 5px solid ${({ theme }) => theme.accentColor};
  border-radius: 1rem;
`

const ControlsSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const ColorsDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  overflow: hidden;
  border: 0.5rem solid ${({ theme }) => theme.flareColor};
  border-radius: 0.5rem;
`

function ColorwayCard({ colorway, onThemeChange }) {
  const [showStyledSystemColors, setShowStyledSystemColors] = useState(false)

  function handleCopyAsJSON() {
    const colorsJSON = getColorsJSON(colorway.colors)
    const JSONString = JSON.stringify(colorsJSON, null, 2)
    // console.log(JSONString)
    copyToClipboard(JSONString)
    toast('Copied as JSON')
  }

  function handleCopyAsCSSVars() {
    const colorsCSS = getColorsCSSVars(colorway.colors)
    copyToClipboard(colorsCSS)
    toast('Copied as CSS Variables')
  }

  const { name, maker, description, images } = colorway
  return (
    <Card>
      <Title>
        {maker} {name}
      </Title>

      <Image src={images[0]} alt={description} height='350' width='500' layout='intrinsic' />

      <ControlsSection>
        <Button onClick={() => setShowStyledSystemColors(!showStyledSystemColors)}>
          See Full Colors
        </Button>
        <Button onClick={handleCopyAsJSON}>Copy as JSON</Button>
        <Button onClick={handleCopyAsCSSVars}>Copy as CSS Vars</Button>
      </ControlsSection>

      {/* <Transition in={showStyledSystemColors} timeout={300}>
        {(state) => (
          <ColorsDisplay>
            {Object.values(colorway.colors).map((color, idx) => (
              <ColorSlider
                color={color}
                key={color}
                showStyledSystemColors={showStyledSystemColors}
                index={idx}
              />
            ))}
          </ColorsDisplay>
        )}
      </Transition> */}
      <ColorsDisplay>
        {Object.values(colorway.colors).map((color, idx) => (
          <ColorSlider
            color={color}
            key={color}
            showStyledSystemColors={showStyledSystemColors}
            index={idx}
          />
        ))}
      </ColorsDisplay>

      <Button onClick={() => onThemeChange()}>Try {name}</Button>
    </Card>
  )
}

export default ColorwayCard
