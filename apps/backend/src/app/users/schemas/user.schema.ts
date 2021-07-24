import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = UserModel & Document;

@Schema()
export class UserModel {

  @Prop({ uniq: true, required: true })
  login: string;

}

export const UserSchema = SchemaFactory.createForClass(UserModel);
