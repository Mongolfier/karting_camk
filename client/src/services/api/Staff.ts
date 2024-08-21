import { AxiosHttpClient } from "services/http/AxiosHttpClient";
import { HttpClient } from "../http/HttpClient";
import { IStaff } from "model/IStaff";

export class StaffClass {
  httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getStaff() {
    return this.httpClient.get<IStaff>("/api/staffs?populate=*");
  }
}

export const Staff = new StaffClass(AxiosHttpClient);
