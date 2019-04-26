import mutationTypes from "./mutation-types";

import { IState, IUser } from "../interfaces/index";

const mutations = {
  [mutationTypes.saveUser](state: IState, user: IUser) {}
};

export default mutations;
