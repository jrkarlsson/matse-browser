import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { percentageByOriginAndCategoryId } from './logic/selectors'
import { COAL, CONCRETE, hsla, SUNBURST, WHITE } from '../../common/styling/colors'
import { H1 } from '../../common/components/header'

const Range = styled.div`
  display: grid;
  grid-template-columns: ${props => props.percent}% 1fr;
  grid-template-rows: 24px;
  background: ${hsla(CONCRETE)};

  border-radius: 6px;
  overflow: hidden;

  transition: grid-template-columns .5s ease-in-out;
`

const Bar = styled.div`
  display: inline-block;
  background: ${props => props.primary ? hsla(SUNBURST) : hsla(CONCRETE)};
  text-align: ${props => props.primary ? 'right' : 'left'};
  color: ${props => props.primary ? hsla(WHITE) : hsla(COAL)};
  padding: 4px;
  white-space: nowrap;
  overflow: hidden;
`

const OriginRange = ({ categoryId, origin }) => {
  let percent = useSelector(state => percentageByOriginAndCategoryId(state, categoryId, origin.countryOfOrigin))
  percent = Math.round(percent * 100)

  return (
    <div>
      <H1>Ursprung</H1>
      <Range percent={percent}>
        <Bar primary>{origin.translatedCountryName} {percent}%</Bar>
        <Bar>{100 - percent}% Övrigt</Bar>
      </Range>
    </div>
  )
}

export default OriginRange
