/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_API_URI: string;
    readonly SERVICE_ACCOUNT_PRIVATE_KEY: string;
    readonly SERVICE_ACCOUNT_CLIENT_EMAIL: string;
    readonly SERVICE_ACCOUNT_PROJECT_ID: string;
  }
}
