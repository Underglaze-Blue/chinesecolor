import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import {ColorInfoType, TupleColor} from '../type'
import styled from 'styled-components'
import CircleSVG from './svg'
import {rgb2hsv} from '../utils'
import CountUp from './countUp'

interface IColorInfoStore {
  colorStore: ColorInfoType
}

interface IColorInfoProps {
  colorInfo: ColorInfoType
}

interface IColorInfoState {
  r: number[],
  g: number[],
  b: number[],
  h: number[],
  s: number[],
  v: number[],
  gray: number[]

}

const StyledWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  margin: 0 1vh;
  @media (max-width: 375px){
   margin: 0;
  }
`

const StyledMain = styled.main`
  width: 300px;
  height: 80vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 160px 140px;
  border-radius: 10px;
  transition: background-color 2s ease-in;
  @media (max-width: 1250px){
    height: 10vh;
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding:0 5vmin;
    margin: 0 auto 2vmin;
  }
  @media (max-width: 375px){
    height: 56px;
    width: 96vw;
    padding: 0;
  }
`

const StyledTitle = styled.h1`
  font-size: 100px;
  width: 110px;
  min-height: 540px;
  line-height: 140px;
  font-weight: 400;
  flex: 0 0 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: 'yuweif2229ad0221222ab', "Microsoft YaHei";
`

const StyledHSV = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 90px 0;
  aside{
    display: flex;
    span{
      font-size: 18px;
      margin-right: 5px;
    }
  }
  @media (max-width: 1250px){  
    flex-direction: row;
  }
  @media (max-width: 500px){
    display: none;
  }
`

const StyledInfo = styled.section`
  box-sizing: border-box;
  height: 620px;
  padding: 20px 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cite{
    font-size: 20px;
    word-break: break-all;
    font-family: 'Quostige';
    font-weight: 400;
  }
  @media (max-width: 1250px){
    height: auto;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    padding:0;
    h1{
      line-height: 1!important;
      min-height: auto;
      font-size: 5vmin;
      width:auto;
      white-space: nowrap;
    }
    cite{
      display: none;
    }
  }
  @media (max-width: 500px){
    h1{
      font-size:50px;
    }
  }
  @media (max-width: 375px){
    h1{
      font-size: 30px;
    }
  }

`

const StyledInformation = styled.section`
  grid-column-start: 1;
  grid-column-end: 3; 
  padding: 10px;
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  font-family: 'VictorMono';
  cite{
    flex: 1;
    white-space: nowrap;
    &:nth-child(-n+3){
      @media (max-width: 1250px){
        display: none;
      }
    }
  }
  @media (max-width: 375px){
    padding-right: 20px;
  }
`

const mapStateToProps = (state: IColorInfoStore) => {
  return {
    colorInfo: state.colorStore
  }
}

class ColorInfo extends PureComponent<IColorInfoProps, IColorInfoState>{
  constructor(props: IColorInfoProps) {
    super(props)
    const info = this.props.colorInfo
    const hsv = rgb2hsv(info.RGB)
    this.state = {
      r: [0, info.RGB[0]],
      g: [0, info.RGB[1]],
      b: [0, info.RGB[2]],
      h: [0, hsv[0]],
      s: [0, hsv[1]],
      v: [0, hsv[2]],
      gray: [0, info.gray]
    }
  }

  // background
  handleBackgroundColor = (result: number, alpha: number): string => {
    return result > 0 ? `rgba(0,0,0,${alpha})` : `rgba(255,255,255,${alpha})`
  }

  // 数字翻牌器
  renderCountUp = (rgb: TupleColor<number, 3>, type: string): React.ReactElement[] => {
    const arr = type === 'RGB' ? rgb : rgb2hsv(rgb)
    const unit = ['°', '%', '%']
    return arr.map((item, index) => {
      return (
        <React.Fragment key={type.split('')[index]}>
          <CountUp preserveValue end={item}/>
          <span>{type === 'RGB' ? '' : unit[index]}{index < arr.length - 1 ? ', ' : ''}</span>
        </React.Fragment>
      )
    })
    // return `${h}°, ${s}%, ${v}%`
  }
  // 渲染 svg cmyk环
  renderSVG = (cmyk: TupleColor<number, 4>): React.ReactElement[] => {
    const CMYKColor = ['#0093D3', '#CC006B', '#FFF10C', '#333333']
    const CMYKText = ['C', 'M', 'Y', 'K']
    return cmyk.map((item, index) => {
      return (
        <aside key={CMYKColor[index]}>
          <span>{CMYKText[index]}</span>
          <CircleSVG key={CMYKColor[index]} color={CMYKColor[index]} percent={item}/>
        </aside>
      )
    })
  }

  render() {
    const style = {
      backgroundColor: this.handleBackgroundColor(this.props.colorInfo.gray - 175, 0.1),
      boxShadow: `0 0 10px ${this.handleBackgroundColor(175 - this.props.colorInfo.gray, 0.1)}`
    }
    return (
      <StyledWrapper>
        <StyledMain style={style}>
          <StyledHSV>
            {this.renderSVG(this.props.colorInfo.CMYK)}
          </StyledHSV>
          <StyledInfo>
            <StyledTitle style={{lineHeight: this.props.colorInfo.name.length < 5 ? '140px' : '110px'}}>{this.props.colorInfo.name}</StyledTitle>
            <cite>{this.props.colorInfo.pinyin.toLocaleUpperCase()}</cite>
          </StyledInfo>
          <StyledInformation>
            <cite>RGB: {this.renderCountUp(this.props.colorInfo.RGB, 'RGB')}
            </cite>
            <cite>Gray scale:
              <CountUp key="gray" decimals={2}
                preserveValue
                end={this.props.colorInfo.gray}/></cite>
            <cite>HSV: {this.renderCountUp(this.props.colorInfo.RGB, 'HSV')}</cite>
            <cite>HEX: {this.props.colorInfo.hex.toLocaleUpperCase()}</cite>
          </StyledInformation>
        </StyledMain>
      </StyledWrapper>
    )
  }
}

export default connect(mapStateToProps)(ColorInfo)
