import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Aspirante, AspiranteRelations} from '../models';

export class AspiranteRepository extends DefaultCrudRepository<
  Aspirante,
  typeof Aspirante.prototype.id,
  AspiranteRelations
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Aspirante, dataSource);
  }
}
