import { createAuth, option } from "@typebot.io/forge";

export const auth = createAuth({
  type: "encryptedCredentials",
  name: "ChatNode account",
  schema: option.object({
    apiKey: option.string.layout({
      label: "API key",
      isRequired: true,
      helperText:
        "You can generate an API key [here](https://go.chatnode.ai/typebot).",
      inputType: "password",
      withVariableButton: false,
      isDebounceDisabled: true,
    }),
  }),
});
