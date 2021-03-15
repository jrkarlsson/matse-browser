import styled from 'styled-components'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { navigateRequest } from './logic/actions'
import TopFiveProducts from './top-five-products'
import SubCategories from './sub-categories'
import OriginRange from './origin-range'
import CurrentCategory from './current-category'
import { isRoot } from '../../common/logic/categories/utils'

const CategoryBrowser = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto 1fr;
  grid-gap: 64px;
`
const Categories = ({ match: { params: { id } }, ...rest }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(navigateRequest(id))
  }, [dispatch, id])

  const seOrigin = { countryOfOrigin: 'SE', translatedCountryName: 'Sverige' }

  return (
    <CategoryBrowser>
      <CurrentCategory categoryId={id} />

      {!isRoot(id) && <OriginRange categoryId={id} origin={seOrigin} />}

      {!isRoot(id) && <TopFiveProducts categoryId={id} />}

      <SubCategories categoryId={id} />
    </CategoryBrowser>
  )
}

export default Categories
