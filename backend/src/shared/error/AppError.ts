export class AppError {

    public readonly message: string;
    public readonly statusCode: number;
    public readonly timestamp: string;
    public readonly data?: any;

    constructor(message: string, statusCode = 400, timestamp?: string, data?: any) {
        this.message = message;
        this.statusCode = statusCode;
        this.timestamp = timestamp;
        this.data = data;
    }

}
