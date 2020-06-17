import {AccessTokenModel} from '../../database';
import {IAccessToken, IUser} from '../../models';

class AuthService {
  createTokenPair(tokenObject: Partial<IAccessToken>): Promise<IAccessToken> {
    const tokensToCreate = new AccessTokenModel(tokenObject);

    return tokensToCreate.save();
  }

  async findUserByToken(findObject: { accessToken?: string, refreshToken?: string }): Promise<IUser | null> {
    const tokenAndUser = await AccessTokenModel
      .findOne(findObject)
      .populate('userId')
      .select({userId: 1, _id: 0}) as any;

    return tokenAndUser?.userId?.toJSON();
  }

  removeToken(removeObject: { accessToken?: string, refreshToken?: string }): Promise<IAccessToken | null> {
    return AccessTokenModel.findOneAndDelete(removeObject) as any;
  }
}

export const authService = new AuthService();
