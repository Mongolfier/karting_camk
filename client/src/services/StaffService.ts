import { UseQueryOptions } from "@tanstack/react-query";
import { AnyFn } from "../utils/AnyFn";
import { Staff, StaffClass } from "./api/Staff";
import { IStaff } from "model/IStaff";

class StaffServiceClass {
  protected _queryKeys = {
    all: () => ["staff"],
    staff: () => [...this._queryKeys.all(), "staff"],
  };
  protected apiClient;

  protected queryKey<T extends keyof typeof this._queryKeys>(
    key: T,
    ...args: Parameters<(typeof this._queryKeys)[T]>
  ): string[] {
    return (this._queryKeys[key] as AnyFn)(...args);
  }

  constructor(apiClient: StaffClass) {
    this.apiClient = apiClient;
  }

  getStaff = async (): Promise<IStaff> => {
    const staffResult = await this.apiClient.getStaff();

    return staffResult.map(({ data }) => data).unwrap();
  };

  getStaffQuery(): UseQueryOptions<IStaff> {
    return {
      queryKey: this.queryKey("staff"),
      queryFn: this.getStaff,
    };
  }
}
export const StaffService = new StaffServiceClass(Staff);
