import { IUser } from "../models/User";

/**
 * Response gotten after login
 */
export interface ILoginResponse {
  access_token: String;
  refresh_token: String;
  user: IUser;
}
