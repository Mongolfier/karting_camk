import { IIMage } from "./IIMage";

export interface IStaff {
  data: {
    attributes: {
      photo: {
        data: IIMage;
      };
      fullName: string;
      email?: string;
      workSchedule: string;
      responsibility?: string;
      phone?: string;
      telegram?: string;
      whatsUp?: string;
      createdAt: string;
      updatedAt: string;
    };
  }[];
  meta: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
