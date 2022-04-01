import { truncate } from "fs";

type ApiResponse = {
    response: string,
    data?: Record<string, any>,
    error?: Error
}

function formatter(response: string, data?: Record<string, any>, error?: Error) {
    const value: ApiResponse = {
        response: response,
        data: data,
        error: error,
    }
    return value;
}
module.exports = {formatter};