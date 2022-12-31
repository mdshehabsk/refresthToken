import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt'
type jwtPayload = {
  sub:string,
  email:string
}
export class AtStrategy extends PassportStrategy(Strategy,  'jwt'){
  
    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey: 'at-secret',
        });
      }
      validate(payload: jwtPayload) {
        return payload;
      }
}