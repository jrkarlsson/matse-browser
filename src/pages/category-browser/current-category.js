import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { H1 } from '../../common/components/header'
import Skeleton from '../../common/components/skeleton'
import { categoryById, isCategoryLoading } from '../../common/logic/categories/selectors'
import { ASH, COAL, hsla } from '../../common/styling/colors'
import { responsive } from '../../common/styling/responsive'

const CategoryName = styled(H1)`
  font-size: 48px;
  text-align: center;

  ${responsive.desktop`
    font-size: 64px;
  `}
`

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
`

const StatValue = styled.div`
  color: ${hsla(COAL)};
  font-size: 28px;
  font-weight: bold;
  text-align: center;

  ${responsive.desktop`
    font-size: 34px;
  `}
`

const StatLabel = styled.div`
  font-size: 18px;
  color: ${hsla(ASH)};
  text-align: center;

  ${responsive.desktop`
    font-size: 24px;
  `}
`

const StatComponent = ({ label, value }) => {
  return (
    <div>
      <StatValue>{value}</StatValue>
      <StatLabel>{label}</StatLabel>
    </div>
  )
}

const Stat = styled(StatComponent)`
  display: flex;
  justify-content: center;
`

const CurrentCategory = ({ categoryId }) => {
  const currentCategory = useSelector(state => categoryById(state, categoryId))
  const isLoading = useSelector(isCategoryLoading)

  return (isLoading || !currentCategory)
    ? (
      <div>
        <CategoryName><Skeleton darker width='50%' height='64px' /></CategoryName>
        <Stats>
          <Stat label='Underkategorier' value={<Skeleton darker height='34px' />} />
          <Stat label='Antal produkter' value={<Skeleton darker height='34px' />} />
        </Stats>
      </div>
      )
    : (
      <div>
        <CategoryName>{currentCategory.name}</CategoryName>
        <Stats>
          <Stat label='Underkategorier' value={currentCategory.maxImmediateChildren} />
          <Stat label='Antal produkter' value={currentCategory.count} />
        </Stats>
      </div>
      )
}

export default CurrentCategory
