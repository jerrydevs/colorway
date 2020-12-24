import styled from 'styled-components'

const StyledButton = styled.button`
    transition: all 0.2s linear;
    transition-property: border-color, background-color, color;

    color: ${({ theme }) => theme.fontColor};

    background-color: ${({ theme }) => theme.backgroundColor};
    border-color: ${({ theme }) => theme.fontColor};
    border-width: 0.3rem;
    border-style: solid;
    border-radius: 0.4rem;

    line-height: 2.5em;
    font-size: 2rem;

    padding: 0 1.2rem;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    :focus {
        outline: none;
    }
    :hover,
    :active {
        border-color: ${({ theme }) => theme.flareColor};
        color: ${({ theme }) => theme.fontColor};
        background-color: ${({ theme }) => theme.backgroundColor};
        cursor: pointer;
    }
`;


function Button({children, ...props}) {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
}

export default Button