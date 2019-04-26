/**
 * Interface defining the response from vuex action.
 */
export interface IVuexActionResponse {
  success: Boolean;
  data?: any;
  errorMessage?: String;
}
