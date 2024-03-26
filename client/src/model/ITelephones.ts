export interface ITelephones {
  data: {
    attributes: {
      telephone: string;
      createdAt: string;
      publishedAt: string;
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
