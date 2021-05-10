import React, {Component} from 'react'
import styled from 'styled-components'
import ColorList from './components/list'
import ColorInfo from './components/information'
import {ColorInfoType} from './type'
import { connect } from 'react-redux'

interface IColorInfoStore {
  colorStore: ColorInfoType
}

interface IColorsProps {
  colorInfo: ColorInfoType
}

interface IColorsState {}

const StyledApp = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
`


const StyledColorsWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 0 0 10vh;
  background: #ffffff;
  transition: background-color 2s ease-in;
  overflow: hidden;
  box-sizing: border-box;
`
const StyledTitle = styled.h1`
  padding: 2vh 0;
  transition: color 2s ease-in;
  font-weight: bolder;
  font-family: 'Omega-Sans';
  text-align: center;
`

const StyledMain = styled.main`
  display: flex;
`
const mapStateToProps = (state: IColorInfoStore) => {
  return {
    colorInfo: state.colorStore
  }
}

class ChineseColors extends Component<IColorsProps, IColorsState>{
  render() {
    return (
      <StyledApp>
        <StyledColorsWrapper style={{backgroundColor: `rgb(${this.props.colorInfo.RGB.join(',')})`}}>
          <StyledTitle style={{color: this.props.colorInfo.gray > 175 ? '#444444' : '#ffffff'}}>CHINESE COLORS</StyledTitle>
          <StyledMain>
            <ColorInfo />
            <ColorList />
          </StyledMain>
        </StyledColorsWrapper>
      </StyledApp>
    )
  }
}

export default connect(mapStateToProps)(ChineseColors)
