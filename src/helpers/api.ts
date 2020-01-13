import axios from "axios";

import handleError from "./handleApiError";

interface IApiConfig {
  baseURL?: string;
  headers?: {
    "X-TOKEN"?: string | null;
  };
}

interface IResponseData {
  // it depends on your response api data
  data: any;
  error: any;
  pagination: any;
}

export { axios };
