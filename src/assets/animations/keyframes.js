import { keyframes } from 'styled-components'
import { RandomArbValue, randomIntValue } from '../helpers/math'

export const YelectricKeyframe = keyframes`
    0% {
      transform: translateY(-200px);
    }
    30% {
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
    35% {
      transform: translateX(-200px);
    }
    66% {
      transform: translateX(60vw);
    }
    70% {
      transform: translateX(60vw);
    }
    100% {
      transform: translateX(60vw);
    }
`
export const XelectricKeyframeNeg = keyframes`
    0% {
      transform: translateX(40vw);
    }
    35% {
      transform: translateX(40vw);
    }
    69% {
      transform: translateX(40vw);
    }
    95% {
      transform: translateX(-60vw);
    }
    100% {
      transform: translateX(-60vw);
    }
`

export const electricPullKeyframe = keyframes`
  0% {
    opacity: 1;
  }
  53% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
  69% {
    opacity: 0;
  }
  72% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }

`

export const electricEmailKeyframe = keyframes`
    0% {
      color: #666;
    }
    25% {
      color: #666;
    
    }
    30% {
      color: #23478c;
      
    }
    39% {
      color: #23478c;
    }
    55% {
      color: #666;
    }
    100% {
      color: #666;
      
    }
`

export const sphereKeyframe = keyframes`
    0% {
      opacity: 0;
    }
    60% {
      opacity: 0;
    }
    70% {
      opacity: .15;
    }
    72% {
      opacity: .5;
      content: 'PUSH'
    }
    76% {
      opacity: 1;
      content: 'PUSH'
    }
    80% {
      opacity: 1;
      content: 'PUSH'
    }
    85% {
      opacity: .5;
      content: 'PUSH'
    }
    89% {
      opacity: .15;
      content: 'PUSH'
    }
    100% {
      opacity: 0;
    }
`

export const videoKeyframe = keyframes`
    0% {
      opacity: 0.1;
    }
    35% {
      opacity: 0.1;
    }
    39% {
      opacity: .3;
    }
    63% {
      opacity: .3;
     
    }
    75% {
      opacity: .1;
    }
   
    100% {
      opacity: 0.1;
    }
`

export const randomMovement = keyframes`
  0% {
    transform: 
    translate(${randomIntValue(-50, 50)}px, ${randomIntValue(-20, 20)}px)
    scale(1);
    opacity: 1;
  }
  15% {
    transform: 
    translate(${randomIntValue(-900, 900)}px, ${randomIntValue(-190, 190)}px)
    scale(${RandomArbValue(0.3, 1)});
    opacity:${RandomArbValue(0.3, 1)};
  } 
  25% {
    transform: 
    translate(${randomIntValue(-900, 900)}px, ${randomIntValue(-190, 190)}px)
    scale(${RandomArbValue(0.3, 1)});
    opacity:${RandomArbValue(0.3, 1)};
  } 
  35% {
    transform: 
    translate(${randomIntValue(-900, 900)}px, ${randomIntValue(-190, 190)}px)
    scale(${RandomArbValue(0.3, 1)});
    opacity:${RandomArbValue(0.3, 1)};
  } 
  50% {
    transform: 
    translate(${randomIntValue(-900, 900)}px, ${randomIntValue(-190, 190)}px)
    scale(${RandomArbValue(0.3, 1)});
    opacity:${RandomArbValue(0.3, 1)};
  } 
  65% {
    transform: 
    translate(${randomIntValue(-900, 900)}px, ${randomIntValue(-190, 190)}px)
    scale(${RandomArbValue(0.3, 1)});
    opacity:${RandomArbValue(0.3, 1)};
  } 
  75% {
    transform: 
    translate(${randomIntValue(-900, 900)}px, ${randomIntValue(-190, 190)}px)
    scale(${RandomArbValue(0.3, 1)});
    opacity:${RandomArbValue(0.3, 1)};
  } 
  90% {
    transform: 
    translate(${randomIntValue(-900, 900)}px, ${randomIntValue(-190, 190)}px)
    scale(${RandomArbValue(0.3, 1)});
    opacity:${RandomArbValue(0.3, 1)};
  } 
  100% {
    transform: 
    translate(${randomIntValue(-900, 900)}px, ${randomIntValue(-190, 190)}px)
    scale(${RandomArbValue(0.3, 1)});
    opacity:${RandomArbValue(0.3, 1)};
  }
`
