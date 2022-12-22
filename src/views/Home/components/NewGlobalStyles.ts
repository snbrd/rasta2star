import styled from 'styled-components'

export const Screen = styled(`div`)<{ image: string }>`
  background-color: var(--primary);
  background-image: ${({ image }) => (image ? `url(${image})` : 'none')};
  background-size: cover;
  background-position: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  overflow-x: hidden;
  padding: 6rem 4.313rem;
  @media screen and (max-width: 767px) {
    padding: 6rem 1.5rem;
  }
  @media screen and (max-height: 767px) {
    padding-top: 12vh;
    padding-bottom: 12vh;
  }
  @media screen and (max-width: 480px) {
    padding-top: 10vh;
    padding-bottom: 7.5vh;
  }
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  gap: 4rem;
`

export const Column = styled(`div`)<{ bordered?: any; grow?: any; width?: string }>`
  background-color: #00000099;
  border: ${({ bordered }) => (bordered ? 'solid 3px #02c4fe;' : '')};
  padding: 2rem;
  flex-grow: ${({ grow }) => (grow ? '1' : '')};
  @media screen and (min-width: 768px) {
    width: ${({ width }) => width};
  }
  border-radius: 15px;
`

export const Heading2 = styled.h2`
  font-size: 2.25rem;
  color: #ffffff;
  font-weight: 700;
`

export const Text = styled(`p`)<{ align?: string; color?: string; lineHeight?: string }>`
  font-family: 'Roboto', sans-serif;
  color: ${({ color }) => color || '#ffffff'};
  text-align: ${({ align }) => align};
  line-height: ${({ lineHeight }) => lineHeight || 1};
`

export const Link = styled.a`
  color: #93c5fd;
  text-decoration: none;
  a:active,
  a:hover,
  a:visited {
    color: inherit;
  }
`

export const RoundedImage = styled(`img`)<{ flip?: boolean }>`
  width: 12rem;
  height: 12rem;
  border-radius: 666px;
  transform: ${({ flip }) => (flip ? 'scaleX(-1)' : '')};
`

export const FlexDiv = styled(`div`)<{
  direction?: any
  gap?: string
  items?: string
  content?: string
  mdWidth?: string
  mobileHide?: any
  margin?: string
  grow?: number
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction[0]};
  gap: ${({ gap }) => gap};
  align-items: ${({ items }) => items};
  justify-content: ${({ content }) => content};
  @media screen and (min-width: 768px) {
    width: ${({ mdWidth }) => mdWidth};
  }
  @media screen and (max-width: 767px) {
    flex-direction: ${(props) => (props.direction[1] ? props.direction[1] : props.direction[0])};
    display: ${({ mobileHide }) => (mobileHide ? 'none;' : '')};
  }
  margin: ${({ margin }) => margin};
  flex-grow: ${({ grow }) => grow};
`

export const OutlineButton = styled(`button`)<{ disabled?: boolean }>`
  padding: 1rem;
  background: transparent;
  border: solid 1px #02c4fe;
  color: #02c4fe;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  :hover {
    background: rgb(15, 132, 255);
    background: linear-gradient(180deg, rgba(15, 132, 255, 1) 0%, rgba(2, 196, 254, 1) 100%);
    color: #fff;
    transition: 0.3s;
  }
  border-radius: 15px;
`

export const FilledButton = styled(`button`)<{ disabled?: boolean }>`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  background: rgb(15, 132, 255);
  background: linear-gradient(175deg, rgba(15, 132, 255, 1) 35%, rgba(2, 196, 254, 1) 100%);
  color: #ffffff;
  font-weight: 700;
  text-align: center;
  border-radius: 0.75rem;
`

export const RoundedOutlineButton = styled(`button`)<{ height?: string; width?: string; disabled?: boolean }>`
  background: transparent;
  border: solid 1px #fff;
  color: #fff;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  :hover {
    background: #b2cbee;
    transition: 0.3s;
  }
  border-radius: 666px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`

export const MobileHide = styled(`span`)<{ disabled?: boolean }>`
  @media screen and (max-width: 767px) {
    display: none;
  }
`
