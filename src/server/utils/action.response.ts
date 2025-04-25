export interface IResponse<T> {
  message: string;
  statusCode: number;
  status: "success" | "error";
  data?: T;
}

const Response = <T>(response: IResponse<T>) => ({
  message: response.message,
  statusCode: response.statusCode,
  status: response.status,
  data: response.data,
});

export default Response;
