export class HttpError extends Error {
    //statusCode: number;
    //status: string;
    constructor(
        message: string,
        public statusCode: number,
        public status: string,
    ) {
        super(message);
        this.name = 'HtmlError';
        // this.statusCode = statusCode;
        // this.status = status;
    }
}
