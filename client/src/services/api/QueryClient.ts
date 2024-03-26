import {
    MutationCache,
    QueryCache,
    QueryClient,
} from '@tanstack/react-query'
import { injectable } from 'inversify';
import { HttpError } from '../http/HttpError';

declare module '@tanstack/react-query' {
    interface Register {
        defaultError: HttpError;
    }
}

@injectable()
export class DefaultQueryClient {
    client: QueryClient;
    constructor() {
        this.client = new QueryClient({
            queryCache: new QueryCache({
                onError: (error) => {
                    console.log('Query cache error', error);
                },
            }),
            mutationCache: new MutationCache({
                onError: (error) => {
                    console.log('Mutation cache error', error);
                },
            }),
            defaultOptions: {
                mutations: {
                    retry: false,
                    networkMode: 'always'
                },
                queries: {
                    retry: false,
                    staleTime: 0,
                    refetchOnWindowFocus: false,
                    refetchOnReconnect: false,
                    refetchInterval: false,
                    refetchIntervalInBackground: false,
                    networkMode: 'always'
                },
            }
        })
    }
}