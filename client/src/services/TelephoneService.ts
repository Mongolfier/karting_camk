import { UseQueryOptions } from "@tanstack/react-query";
import { Telephones } from "./api/Telephones";
import { inject, injectable } from "inversify";
import { AnyFn } from "../utils/AnyFn";
import { ITelephones } from "model/ITelephones";

@injectable()
export class TelephonesService {
  protected _queryKeys = {
    all: () => ["telephones"],
    telephones: () => [...this._queryKeys.all(), "telephone"],
  };
  protected apiClient: Telephones;

  protected queryKey<T extends keyof typeof this._queryKeys>(
    key: T,
    ...args: Parameters<(typeof this._queryKeys)[T]>
  ): string[] {
    return (this._queryKeys[key] as AnyFn)(...args);
  }

  constructor(@inject(Telephones) apiClient: Telephones) {
    this.apiClient = apiClient;
  }

  getTelephones = async (): Promise<ITelephones> => {
    const telephonesResult = await this.apiClient.getTelephone();

    return telephonesResult.map(({ data }) => data).unwrap();
  }

  getTelephonesQuery(): UseQueryOptions<ITelephones> {
    return {
      queryKey: this.queryKey("telephones"),
      queryFn: this.getTelephones,
    }
  }

  // getProfile = async (): Promise<IUserProfile> => {
  //   const profileResult = await this.apiClient.getUserProfile();

  //   return profileResult.map(({ data }) => data).unwrap();
  // };

  // getUserProfileQuery(): UseQueryOptions<IUserProfile> {
  //   return {
  //     queryKey: this.queryKey("userProfile"),
  //     queryFn: this.getProfile,
  //   };
  // }
}
