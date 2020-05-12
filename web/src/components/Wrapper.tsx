import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

interface WrapperModel {
    extraClasses?: Array<String>
    styles?: object
    children: React.ReactNode
}

const Wrapper = ({extraClasses, styles, children}: WrapperModel) => (
    <StyledWrapper className={classNames('wrapper', extraClasses)} style={styles}>
      {children}
    </StyledWrapper>
)

Wrapper.defaultProps = {
    extraClasses: [],
  } as Partial<WrapperModel>

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    //padding: 0 25px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    z-index: 2;

    @media only screen and (max-width: 1170px) {
      width: 90%;
    }
`

export default Wrapper
