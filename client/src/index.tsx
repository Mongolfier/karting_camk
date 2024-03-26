import "reflect-metadata";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { router } from "shared/config/routeConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as InversifyProvider } from 'inversify-react';
import { Container } from "inversify";
import { AxiosHttpClient, AxiosHttpClientDefaults } from "services/http/AxiosHttpClient";
import { HttpClient } from "services/http/HttpClient";
import store, { AppDispatch } from "store";
import { DefaultQueryClient } from "services/api/QueryClient";
import { Telephones } from "services/api/Telephones";
import { TelephonesService } from "services/TelephoneService";

import "./app/styles/index.css";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const container = new Container();
container.bind(AxiosHttpClientDefaults).toConstantValue({
  baseURL: process.env.REACT_APP_API_HOST,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.REACT_APP_BEARER}`
  },
  withCredentials: true,
});
container.bind(AxiosHttpClient).toSelf().inSingletonScope();
container.bind(HttpClient).toService(AxiosHttpClient);
container.bind(AppDispatch).toConstantValue(store.dispatch);
container.bind(DefaultQueryClient).toSelf().inSingletonScope();
container.bind(Telephones).toSelf().inSingletonScope();

container.bind(TelephonesService).toSelf().inSingletonScope();

const render = (container: Container) => root.render(
  <React.StrictMode>
    <InversifyProvider container={container}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </InversifyProvider>
  </React.StrictMode>  
);

render(container);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
