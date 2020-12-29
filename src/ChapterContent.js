import React from 'react'
import styled from 'styled-components'

const Chapter = styled.p`
  color: var(--text);
  max-width: 700px;
  margin: auto;
  padding: 20px;
   font-family: "Trebuchet MS", sans-serif;
  font-size: 20px;
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.4;
  &::first-letter {
    font-size: 40px;
    font-weight: bold;
    color: white;
    background: var(--highlight);
    padding-right: 5px;
    padding-left: 5px;
    border-radius: 5px;
  }
`


export default function ChapterContent (props) {
  return (
    <Chapter>{props.children}</Chapter>
  )
}


