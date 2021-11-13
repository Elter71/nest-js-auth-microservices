import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-local';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpired: false,
      secretOrKey: 'xxx',
    });
  }

  async validate(payload) {
    return { id: payload.sub, user: payload.user };
  }
}
