import { defineAction } from "@agent-native/core";
import { z } from "zod";
import { isLocalPlanRuntime } from "../server/lib/local-identity.js";

export default defineAction({
  description:
    "Report whether the plan app is running in single-user local mode, where the UI can comment and create without signing in. Reveals only the local-mode boolean; it is a UI signal, not an agent tool.",
  schema: z.object({}),
  http: { method: "GET" },
  readOnly: true,
  requiresAuth: false,
  agentTool: false,
  run: async () => {
    return { localMode: isLocalPlanRuntime() };
  },
});
