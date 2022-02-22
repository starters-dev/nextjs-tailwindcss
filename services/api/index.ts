import { GlobalApi } from "./global";

export class ApiService implements IService {
  private inited = false;

  global: GlobalApi;

  constructor() {
    this.global = new GlobalApi();
  }

  init = async () => {
    if (!this.inited) {
      this.inited = true;
    }
  };
}
