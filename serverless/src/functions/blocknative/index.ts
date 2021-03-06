import schema from "./schema";
import { handlerPath } from "@libs/handlerResolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "post",
        path: "blockNativeEventHook",
        cors: true,
        request: {
          parameters: {
            headers: {
              Authorization: {
                required: true,
              },
            },
          },
          schema: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};
