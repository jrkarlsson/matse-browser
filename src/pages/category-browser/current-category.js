import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { H1 } from '../../common/components/header'
import Skeleton from '../../common/components/skeleton'
import { categoryById, isCategoryLoading } from '../../common/logic/categories/selectors'
import { ASH, COAL, hsla } from '../../common/styling/colors'

const CategoryName = styled(H1)`
  font-size: 64px;
  text-align: center;
`

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
`

const StatValue = styled.div`
  font-size: 34px;
  color: ${hsla(COAL)};
  font-weight: bold;
  text-align: center;
`

const StatLabel = styled.div`
  font-size: 24px;
  color: ${hsla(ASH)};
  text-align: center;
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
