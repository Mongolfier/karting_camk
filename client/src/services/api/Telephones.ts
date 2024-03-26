import { HttpClient } from "../http/HttpClient";
import * as yup from "yup";
import { Links } from "../../model/Link";
import { inject, injectable } from "inversify";
import { IUserProfile } from "../../model/IUserProfile";
import { ITelephones } from "model/ITelephones";

@injectable()
export class Telephones {
  httpClient: HttpClient;
  constructor(@inject(HttpClient) httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  // getLinks() {
  //   return this.httpClient.get<Links>("/smartdesktop/api/links", {
  //     responseBodySchema: yup.object({
  //       modes: yup
  //         .array(
  //           yup.object({
  //             gmmode: yup.string().required(),
  //             image: yup.string().required(),
  //             template: yup.object({
  //               title: yup.string().required(),
  //               description: yup.string().defined(),
  //               uuid: yup.string().required(),
  //             }).required(),
  //             text: yup.string().required(),
  //           }).required(),
  //         ).required(),
  //     }).required(),
  //   });
  // }

  getTelephone() {
    return this.httpClient.get<ITelephones>("/api/telephones");
  }
}
