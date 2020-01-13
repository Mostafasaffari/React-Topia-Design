import axios from "axios";

import handleError from "./handleApiError";

interface IApiConfig {
  baseURL?: string;
  headers?: {
    "X-TOKEN"?: string | null;
  };
}

export { axios };
