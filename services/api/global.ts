import { BaseApi } from "./base";

export class GlobalApi extends BaseApi {
  getGetData = (): Promise<void> => this.req(`get-data`);
}
