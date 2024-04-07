export interface IContacts {
  data: {
    attributes: {
      address: string;
      telephone: string;
      createdAt: string;
      publishedAt: string;
      updatedAt: string;
      openingHours: string;
      busStop: string;
      bus: string;
      shuttle: string;
      supportEmail: string;
    };
    id: number;
  }[];
  meta: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
