/* eslint-disable @typescript-eslint/no-explicit-any */
interface ResponseInterface {
  message: string;
  statusCode: number;
  status: "success" | "error";
  data?: any;
}

const Response = (response: ResponseInterface) => ({
  message: response.message,
  statusCode: response.statusCode,
  status: response.status,
  data: response.data,
});

export default Response;
