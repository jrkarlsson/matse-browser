import { schema } from 'normalizr'

const productEntity = new schema.Entity('products')

export const responseSchema = new schema.Array(productEntity)

export default responseSchema
