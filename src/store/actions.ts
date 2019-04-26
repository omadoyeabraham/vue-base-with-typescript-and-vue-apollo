import { createProvider } from "../vue-apollo";
import getSafe from "@omadoyeabraham/get-safe";

import mutationTypes from "./mutation-types";
import actionTypes from "./action-types";
import { ILoginInput, IVuexActionResponse } from "../interfaces/index";
import { loginMutation } from "../graphql/index";

const apolloClient = createProvider().defaultClient;

export default {
  async [actionTypes.login](
    { commit },
    loginInput: ILoginInput
  ): Promise<IVuexActionResponse> {
    try {
      const response = await apolloClient.mutate({
        mutation: loginMutation,
        variables: {
          data: loginInput
        }
      });

      commit(mutationTypes.saveUser, response.data.login);
      return {
        success: true
      };
    } catch (error) {
      return {
        success: false,
        errorMessage: error.message
      };
    }
  }
};
