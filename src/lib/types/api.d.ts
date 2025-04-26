declare type successfulResponse<T>={
message:'success',
} &T

declare type ErrorResponse={
    message:string;
    code:number
}

declare type APIResponse<T> = successfulResponse<T> | ErrorResponse