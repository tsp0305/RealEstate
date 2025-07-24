import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Property from './Property'

export default class Rented extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public owner_id: number

  @column()
  public prop_id: number

  @column()
  public tent_id: number

  @column()
  public start_date: DateTime

  @column()
  public end_date: DateTime

  @column()
  public amount: number

  @column()
  public status: string

  @belongsTo(() => User, {
    foreignKey: 'owner_id',
  })
  public User: BelongsTo<typeof User>

  @belongsTo(() => Property, {
    foreignKey: 'prop_id',
  })
  public prop: BelongsTo<typeof Property>

  @belongsTo(() => User, {
    foreignKey: 'tent_id',
  })
  public tenant: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
