import { IState } from "../interfaces/index";

const getDefaultState = (): IState => {
  return {
    accessToken: null,
    refreshToken: null,
    user: {
      name: ""
    }
  };
};

export default getDefaultState;
