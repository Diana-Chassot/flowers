import { checkStatusResponse } from "../utils/check-status-response";


export const fetchData = async (url) => {
  const response = await fetch(url);
  const data = checkStatusResponse(response);
  return data;
};

