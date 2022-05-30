import { keyframes } from "@emotion/react"

export const skeletonAnimation = keyframes`
  0% {
    background: rgba(165, 165, 165, 0.1);
  }
  50% {
    background: rgba(165, 165, 165, 0.5);
  }
  100% {
    background: rgba(165, 165, 165, 0.1);
  }

`