import type { PreviewMessageParams } from "../bubble/types";

export type CommandArgs = {
  id?: string;
};

export type CommandData = CommandArgs & {
  isFromTypebot: boolean;
} & (
    | {
        command:
          | "open"
          | "toggle"
          | "close"
          | "hidePreviewMessage"
          | "unmount"
          | "reload";
      }
    | ShowMessageCommandData
    | SetPrefilledVariablesCommandData
    | SetInputValueCommandData
    | SendCommandCommandData
  );

export type ShowMessageCommandData = {
  command: "showPreviewMessage";
  message?: Pick<PreviewMessageParams, "avatarUrl" | "message">;
};

export type SetPrefilledVariablesCommandData = {
  command: "setPrefilledVariables";
  variables: Record<string, string | number | boolean>;
};

export type SetInputValueCommandData = {
  command: "setInputValue";
  value: string;
};

export type SendCommandCommandData = {
  command: "sendCommand";
  text: string;
};
