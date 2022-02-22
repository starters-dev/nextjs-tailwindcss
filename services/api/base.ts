import merge from "lodash/merge";

export class BaseApi {
  backendUrl;

  constructor() {
    this.backendUrl =
      process.env.BACKEND_URL ?? process.env.NEXT_PUBLIC_BACKEND_URL;
  }

  protected req = async (
    path: string,
    method: string = "GET",
    data: any = undefined,
    extraHeaders: Record<string, string> = {}
  ) => {
    const url = `${this.backendUrl}/api/${path}`;
    const headers = await this.getHeaders(extraHeaders);
    const body = JSON.stringify(data);

    const resp = await fetch(url, {
      method,
      body,
      headers,
    });
    const json = await resp.json();
    this.checkError(json);

    return json;
  };

  protected getHeaders = async (custom: Record<string, string> = {}) => {
    return merge(
      {
        "Bypass-Tunnel-Reminder": "something", // for localtunnel
        "Content-type": "application/json",
      },
      custom
    );
  };

  protected checkError = (err: any) => {
    if (err.error && err.message && err.statusCode) {
      console.log("BaseApi :: req :: error");
      console.log(err);

      throw err;
    }
  };
}
