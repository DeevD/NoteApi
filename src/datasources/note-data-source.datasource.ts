import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './note-data-source.datasource.json';

export class NoteDataSourceDataSource extends juggler.DataSource {
  static dataSourceName = 'NoteDataSource';

  constructor(
    @inject('datasources.config.NoteDataSource', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
