import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Tldr } from './images/tldr.svg'

const Flag = styled.img`
  height: 20vmin;
  width: 15vmin;
`
const Container = styled.div`
  margin: auto;
  width: fit-content;
`
const Button = styled.button`
  margin: 4vmin;
  border: none;
  background: none;
`
export default function Flags (props) {
  return (
    <Container>
      <Button>
        <Tldr style={{width: '15vmin'}}/>
      </Button>
      <Button>
        <Flag src={"https://hatscripts.github.io/circle-flags/flags/si.svg"}/>
      </Button>
      <Button>
	<Flag src={"https://hatscripts.github.io/circle-flags/flags/gb.svg"}/>
      </Button>
    </Container>

  )
}
