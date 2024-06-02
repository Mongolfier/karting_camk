import { UseQueryOptions } from "@tanstack/react-query";
import { AnyFn } from "../utils/AnyFn";
import { IContacts } from "model/IContacts";
import { Contacts, ContactsClass } from "./api/Contacts";

class ContactsServiceClass {
  protected _queryKeys = {
    all: () => ["contacts"],
    contacts: () => [...this._queryKeys.all(), "contact"],
  };
  protected apiClient;

  protected queryKey<T extends keyof typeof this._queryKeys>(
    key: T,
    ...args: Parameters<(typeof this._queryKeys)[T]>
  ): string[] {
    return (this._queryKeys[key] as AnyFn)(...args);
  }

  constructor(apiClient: ContactsClass) {
    this.apiClient = apiClient;
  }

  getContacts = async (): Promise<IContacts> => {
    const contactsResult = await this.apiClient.getContacts();

    return contactsResult.map(({ data }) => data).unwrap();
  };

  getContactsQuery(): UseQueryOptions<IContacts> {
    return {
      queryKey: this.queryKey("contacts"),
      queryFn: this.getContacts,
    };
  }
}

export const ContactsService = new ContactsServiceClass(Contacts);
