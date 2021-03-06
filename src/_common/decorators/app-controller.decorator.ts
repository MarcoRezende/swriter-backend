import {
  applyDecorators,
  BadRequestException,
  Controller,
} from '@nestjs/common';
import type { CrudOptions } from '@nestjsx/crud';
import { Crud } from '@nestjsx/crud';

export const AppController = (
  type: any,
  endpoint: string,
  crudOptions: Partial<CrudOptions> = {},
) =>
  applyDecorators(
    Crud({
      model: {
        type,
      },
      routes: { only: ['getOneBase', 'getManyBase'] },
      params: {
        id: {
          field: 'id',
          type: 'string',
          primary: true,
        },
      },
      ...crudOptions,
      validation: {
        exceptionFactory: errors => new BadRequestException(errors),
      },
    }),
    Controller(`app/${endpoint}`),
  );
