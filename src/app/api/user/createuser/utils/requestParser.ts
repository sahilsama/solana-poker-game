import { NextRequest } from "next/server";
import { LoginRequest } from "../route";

const requestParser = async (loginRequest: NextRequest): Promise<LoginRequest> => {
  const request: LoginRequest = await loginRequest.json();

  if (request.walletId === null || request.walletId === undefined) {
    //@todo: log real reason here :)
    throw new Error("An error occured [Create user]");
  }

  return request;
};

export default requestParser;
