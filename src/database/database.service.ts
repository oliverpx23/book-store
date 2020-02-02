import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from 'src/config/config.service';
import { ConfigModule } from 'src/config/config.module';
import { Configuration } from 'src/config/config.keys';
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';
 
export const databaseProviders = [
    TypeOrmModule.forRootAsync({
        imports: [
            ConfigModule
        ],
        inject: [
            ConfigService
        ],
        async useFactory(config: ConfigService) {
            return {
                ssl: true,
                type: 'postgres' as 'postgres',
                host: config.get(Configuration.HOST),
                username: config.get(Configuration.USERNAME),
                password: config.get(Configuration.PASSWORD),
                entities:[__dirname + '/../**/*.entity{.ts,.js}'],
                migrations: [__dirname + '/migrations/*{.ts,.js}']
            } as ConnectionOptions;
        }
    })
];