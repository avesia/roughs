declare module 'process' {
    global {
        namespace NodeJS {
            interface ProcessEnv {
                AVESIA_APP_DEV?: string;
            }
        }
    }
}
