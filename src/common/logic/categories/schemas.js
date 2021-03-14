import { schema } from 'normalizr'

const categoryEntity = new schema.Entity('categories')
const categoryArray = new schema.Array(categoryEntity)
categoryEntity.define({ subCategories: categoryArray })

export const responseSchema = new schema.Entity(
  'categories', // This merge the top level category into the other entities.
  { subCategories: categoryArray }
)

export default responseSchema
