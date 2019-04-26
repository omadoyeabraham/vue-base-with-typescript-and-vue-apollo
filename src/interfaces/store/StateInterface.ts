export interface IState {
  accessToken: String | null;
  refreshToken: String | null;
  user: {
    name: String;
  };
}
