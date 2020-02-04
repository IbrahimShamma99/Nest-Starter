import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import { GraphqlService } from './graphql.service';

@Module({
    imports: [
        GraphQLModule.forRoot({
            debug: false,
            playground: false,
        }),
      ],
    providers: [GraphqlService]
})
export class GraphqlModule {}
