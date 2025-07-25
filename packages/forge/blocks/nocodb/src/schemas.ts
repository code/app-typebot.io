// Do not edit this file manually
import { parseBlockCredentials, parseBlockSchema } from "@typebot.io/forge";
import { auth } from "./auth";
import { nocodbBlock } from "./index";

export const nocodbBlockSchema = parseBlockSchema(nocodbBlock);
export const nocodbCredentialsSchema = parseBlockCredentials(
  nocodbBlock.id,
  auth,
);
