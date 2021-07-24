import { UserModel } from '../schemas/user.schema';
import { UserLoginResponse } from '@messager/shared-types';

export class UserModelMapper {

  private readonly model: UserModel;

  constructor(model: UserModel) {
    this.model = model;
  }

  get dto(): UserLoginResponse {
    return {
      login: this.model.login,
      time: Number(new Date())
    };
  }
}
