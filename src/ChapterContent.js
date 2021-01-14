import React from 'react'
import styled from 'styled-components'

const Chapter = styled.p`
  color: var(--text);
  max-width: 700px;
  margin: auto;
  padding: 22px;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  text-align: left;
  line-height: 1.4;
  &::first-letter {
    font-size: 29px;
    font-weight: bold;
    color: white;
    background: var(--highlight);
    padding-right: 5px;
    padding-left: 5px;
    padding-bottom: 0px;
    border-radius: 0px 10px 0px 10px;
  }
`


export default function ChapterContent (props) {
  return (
    <Chapter>{props.children}</Chapter>
  )
}


