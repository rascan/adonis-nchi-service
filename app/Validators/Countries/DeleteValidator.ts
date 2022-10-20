import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DeleteValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    params: schema.object().members({
      id: schema.number([
        rules.exists({
          table: 'countries',
          column: 'id',
          where: {
            is_active: true
          },
        })
      ]),
    }),
  })
}
