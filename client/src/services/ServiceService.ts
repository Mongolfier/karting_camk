class ServiceServiceClass {
  protected _queryKeys = {
    all: () => ["services"],
    services: () => [...this._queryKeys.all(), "services"],
  };
  protected apiClient;

  constructor(apiClient) {
    this.apiClient = apiClient;
  }
}
