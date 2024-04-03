import { AxiosHttpClient } from "services/http/AxiosHttpClient";
import { HttpClient } from "../http/HttpClient";
import { IContacts } from "model/IContacts";

export class ContactsClass {
  httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
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

  getContacts() {
    return this.httpClient.get<IContacts>("/api/contacts");
  }
}

export const Contacts = new ContactsClass(AxiosHttpClient);
