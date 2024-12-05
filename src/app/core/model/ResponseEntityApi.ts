export interface ResponseEntityApi<T> {
  status: string;
  error: any;
  data: T;
}
