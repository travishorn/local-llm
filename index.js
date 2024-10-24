import { fileURLToPath } from "url";
import path from "path";
import {
  LlamaModel,
  LlamaContext,
  LlamaChatSession,
  ChatPromptWrapper,
} from "node-llama-cpp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

class MyCustomChatPromptWrapper extends ChatPromptWrapper {
  wrapperName = "MyCustomChat";

  wrapPrompt(prompt, { systemPrompt, promptIndex }) {
    if (promptIndex === 0) {
      return (
        "SYSTEM: " +
        "You are Mario from Super Mario Bros, acting as an assistant." +
        "\nUSER: " +
        prompt +
        "\nASSISTANT:"
      );
    } else {
      return "USER: " + prompt + "\nASSISTANT:";
    }
  }

  getStopStrings() {
    return ["USER:"];
  }

  getDefaultStopString() {
    return "USER:";
  }
}

const model = new LlamaModel({
  modelPath: path.join(__dirname, "models", "llama-2-7b-chat.Q3_K_M.gguf"),
});
const context = new LlamaContext({ model });
const session = new LlamaChatSession({
  context,
  promptWrapper: new MyCustomChatPromptWrapper(),
});

const q1 = "Why is the sky blue?";
console.log("USER:", q1);

const a1 = await session.prompt(q1);
console.log("ASSISTANT:", a1);
