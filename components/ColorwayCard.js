import React, { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import Button from './Button'
import ColorSlider from './ColorSlider'

const Title = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.fontColor};
`

const Description = styled.h3`
  font-size: 2rem;
  color: ${({ theme }) => theme.fontColor};
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
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
  border: 2px solid ${({ theme }) => theme.flareColor};
  border-radius: 1rem;
`

function ColorwayCard({ colorway, onThemeChange }) {
  const [fullColorsToggle, setFullColorsToggle] = useState(false)

  const { name, maker, description, images } = colorway
  return (
    <Card>
      <Title>
        {maker} {name}
      </Title>

      <Image src={images[0]} alt={description} width='400' height='300' layout='intrinsic' />

      <ControlsSection>
        <Button onClick={() => setFullColorsToggle(!fullColorsToggle)}>Toggle Full Colors</Button>
        <Button>Copy to Clipboard</Button>
      </ControlsSection>

      <ColorsDisplay>
        {Object.values(colorway.colors).map((color) => (
          <ColorSlider color={color} key={color} fullColors={fullColorsToggle} />
        ))}
      </ColorsDisplay>

      <Button onClick={() => onThemeChange()}>Try {name}</Button>
    </Card>
  )
}

export default ColorwayCard
