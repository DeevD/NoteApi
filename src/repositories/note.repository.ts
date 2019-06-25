import {DefaultCrudRepository} from '@loopback/repository';
import {Note, NoteRelations} from '../models';
import {NoteDataSourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class NoteRepository extends DefaultCrudRepository<
  Note,
  typeof Note.prototype.id,
  NoteRelations
> {
  constructor(
    @inject('datasources.NoteDataSource') dataSource: NoteDataSourceDataSource,
  ) {
    super(Note, dataSource);
  }
}
