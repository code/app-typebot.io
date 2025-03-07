import { defaultScriptOptions } from "@typebot.io/blocks-logic/script/constants";
import type { ScriptBlock } from "@typebot.io/blocks-logic/script/schema";
import type { SessionState } from "@typebot.io/chat-session/schemas";
import { executeFunction } from "@typebot.io/variables/executeFunction";
import { extractVariablesFromText } from "@typebot.io/variables/extractVariablesFromText";
import { parseGuessedValueType } from "@typebot.io/variables/parseGuessedValueType";
import { parseVariables } from "@typebot.io/variables/parseVariables";
import type { Variable } from "@typebot.io/variables/schemas";
import type { ExecuteLogicResponse } from "../../../types";
import { updateVariablesInSession } from "../../../updateVariablesInSession";

export const executeScript = async (
  state: SessionState,
  block: ScriptBlock,
): Promise<ExecuteLogicResponse> => {
  const { variables } = state.typebotsQueue[0].typebot;
  if (!block.options?.content) return { outgoingEdgeId: block.outgoingEdgeId };

  const isExecutedOnClient =
    block.options.isExecutedOnClient ?? defaultScriptOptions.isExecutedOnClient;

  if (!isExecutedOnClient) {
    const { newVariables, error } = await executeFunction({
      variables,
      body: block.options.content,
    });

    const updateVarResults = newVariables
      ? updateVariablesInSession({
          newVariables,
          state,
          currentBlockId: block.id,
        })
      : undefined;

    let newSessionState = state;

    if (updateVarResults) {
      newSessionState = updateVarResults.updatedState;
    }

    return {
      outgoingEdgeId: block.outgoingEdgeId,
      logs: error ? [error] : [],
      newSessionState,
      newSetVariableHistory: updateVarResults?.newSetVariableHistory,
    };
  }

  const scriptToExecute = parseScriptToExecuteClientSideAction(
    variables,
    block.options.content,
  );

  return {
    outgoingEdgeId: block.outgoingEdgeId,
    clientSideActions: [
      {
        type: "scriptToExecute",
        scriptToExecute: scriptToExecute,
      },
    ],
  };
};

export const parseScriptToExecuteClientSideAction = (
  variables: Variable[],
  contentToEvaluate: string,
) => {
  const content = parseVariables(variables, { fieldToParse: "id" })(
    contentToEvaluate,
  );
  const args = extractVariablesFromText(variables)(contentToEvaluate).map(
    (variable) => ({
      id: variable.id,
      value: parseGuessedValueType(variable.value),
    }),
  );
  return {
    content,
    args,
  };
};
