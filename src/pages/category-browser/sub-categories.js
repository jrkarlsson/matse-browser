import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Grid, GridCell, GridCellSkeleton } from '../../common/components/grid'
import { childCategoriesById, isCategoryLoading } from '../../common/logic/categories/selectors'
import FolderIcon from '../../common/components/FolderIcon'
import { H1 } from '../../common/components/header'

const SubCategories = ({ categoryId }) => {
  const subCategories = useSelector(state => childCategoriesById(state, categoryId))
  const isLoading = useSelector(isCategoryLoading)

  return (
    <div>
      <H1>Underkategorier</H1>
      <Grid>
        {isLoading
          ? Array(10).fill(0).map((value, key) => <GridCellSkeleton key={key} />)
          : subCategories.map((category, key) =>
            <GridCell
              key={key}
              as={Link}
              to={`/${category.id}`}
              header={category.name}
              figure={<FolderIcon />}
            >
              ({category.count})
            </GridCell>)}
      </Grid>
    </div>

  )
}

export default SubCategories
