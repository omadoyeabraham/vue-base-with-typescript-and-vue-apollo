import mutationTypes from "./mutation-types";

import { IState, IUser, ILoginResponse } from "../interfaces/index";

const mutations = {
  /**
   * Save the information gotten after login.
   *
   * @param state
   * @param loginInfo
   */
  [mutationTypes.saveLoginInformation](
    state: IState,
    loginInfo: ILoginResponse
  ) {
    state.accessToken = loginInfo.access_token;
    state.refreshToken = loginInfo.refresh_token;
    state.user = loginInfo.user;
  }
};

export default mutations;
