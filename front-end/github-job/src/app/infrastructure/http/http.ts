import axios, { AxiosResponse } from "axios";

class Http {
  public post = async <T>(
    url: string,
    body: any,
    header: any
  ): Promise<AxiosResponse<any, any>> => {
    return await axios.post(url, body, header);
  };
  public get = async <T>(
    url: string,
    header: any
  ): Promise<AxiosResponse<any, any>> => {
    return await axios.get(url, header);
  };
  public header_get() {
    return {
      "Content-Type": "application/x-www-form-urlencoded",
      Origin: `${process.env.REACT_URL_LOCAL}`,
    };
  }
}
export { Http };