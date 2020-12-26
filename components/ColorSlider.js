import React, { useState, useEffect } from 'react'
import styled, { ThemeContext } from 'styled-components'
import chroma from 'chroma-js'
import { useSpring, animated } from 'react-spring'

import ColorBox from './ColorBox'
import { getStyledSystemColors } from '../utils/getStyledSystemColors'

const StyledSystemSlider = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  /* height: 50rem; */
  height: auto;
  border-radius: 1rem;
`

function ColorSlider({ color, theme, showStyledSystemColors }) {
  const [colorChroma, setColorChroma] = useState(chroma(color))
  const [styledSystemColors, setStyledSystemColors] = useState([])

  useEffect(() => {
    const styledSystemColors = getStyledSystemColors(colorChroma)
    setStyledSystemColors(styledSystemColors)
  }, [showStyledSystemColors])

  const duration = 300

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  }
  return (
    <>
        {showStyledSystemColors ? (
          <StyledSystemSlider>
            {styledSystemColors.map((color, idx) => (
              <ColorBox color={color.hex()} key={color.hex()} />
            ))}
          </StyledSystemSlider>
        ) : (
          <ColorBox color={color} />
        )}
    </>
  )

  // return (
  //   <>
  //     {showStyledSystemColors ? (
  //       <StyledSystemSlider>
  //         {styledSystemColors.map((color, idx) => (
  //           <ColorBox color={color.hex()} key={color.hex()} />
  //         ))}
  //       </StyledSystemSlider>
  //     ) : (
  //       <ColorBox color={color} />
  //     )}
  //   </>
  // )
}

export default ColorSlider
