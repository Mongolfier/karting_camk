import { interfaces } from "inversify";

export const Environment: interfaces.ServiceIdentifier<Environment> = Symbol('Environment');
export interface Environment {}

