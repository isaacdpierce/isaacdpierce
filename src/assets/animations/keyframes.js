import React from 'react'
import styled, { keyframes } from 'styled-components'

export const YelectricKeyframe = keyframes`
    0% {
      transform: translateY(-200px);
    }
    50% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(100vh);
    }
`
export const XelectricKeyframe = keyframes`
    0% {
      transform: translateX(-200px);
    }
    50% {
      transform: translateX(100vh);
    }
    100% {
      transform: translateX(100vh);
    }
`

export const electricEmailKeyframe = keyframes`
    0% {
      color: #666;
    }
    40% {
      color: #666;
      filter: brightness(150%);
    }
    42% {
      color: #233f72;
      filter: brightness(200%);
    }
    49% {
      color: #233f72;
    }
    75% {
      color: #666;
    }
    100% {
      color: #666;
      
    }
`
