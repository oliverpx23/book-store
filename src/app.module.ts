import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { UserModule } from './modules/user/user.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { DatabaseModule } from './database/database.module';
import { RoleModule } from './modules/role/role.module';

@Module({
  imports: [
    ConfigModule,
    UserModule,
    DatabaseModule,
    RoleModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {

  static port: number | string;

  constructor(private readonly _configService: ConfigService) {

    AppModule.port = this._configService.get(Configuration.PORT);

  }
  
}
