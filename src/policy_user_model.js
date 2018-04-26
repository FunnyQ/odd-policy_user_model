/**
 * a base structure for create a UserPolicyModel.
 *
 * @export
 * @class UserPolicyModelBase
 */
export default class UserPolicyModelBase {
  /**
   * jwt payload MUST contain `sub` for user id, `role` for user role definition. Others can be optional.
   *
   * @param {Object} jwtPayload decoded payload of a valid jwt
   */
  constructor(jwtPayload) {
    this.id = jwtPayload.sub.toString()
    this.role = jwtPayload.role
    this.type = jwtPayload.type
    this.issuedAt = jwtPayload.iat
    this.expiredAt = jwtPayload.exp
  }
}
