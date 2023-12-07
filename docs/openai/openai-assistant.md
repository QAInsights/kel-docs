---
sidebar_position: 2
---

# OpenAI Assistant Config

`kel` supports OpenAI assistant feature where you can summon your assistant by uploading a file and ask questions about your document.

Here is [how it works](https://platform.openai.com/docs/assistants/overview).

```toml title="config.toml"
[openai_assistant]
enable_openai_assistant = false
openai_assistant_model_name = "gpt-4-1106-preview"
openai_assistant_instructions = """
Analyse the file and answer questions about performance stats. Give me the stats in a table format unless I ask it in a different way.
If you have trouble in understanding the file format, consider it as a CSV file unless I specify the file format.
Keep the answers short and simple unless I ask for a detailed explanation.
"""
openai_assistant_prompt = """
Do not give detailed explanation. If you find any bottleneck, please share that as well.
"""
openai_assistant_choice_1 = "Give me min, max, 95 percentile, 99 percentile elapsed or response time in a table format."
openai_assistant_choice_2 = "Analyze the data and give me the bottleneck in a simple sentence."
openai_assistant_choice_3 = "Give me the passed and failed transactions in a table format."
openai_assistant_choice_4 = "Give me the HTTP response code split by transaction in a table format."

openai_delete_assistant_at_exit = true
```

- `enable_openai_assistant = false`: This setting determines whether the OpenAI assistant is enabled. It's currently set to false, which means the assistant is not enabled.

  - By default it is `disabled`. If you enable it, you cannot have chat mode. You must upload a file and assistant name to interacti with your uploaded file.

- openai_assistant_model_name = "gpt-4-1106-preview": This setting specifies the model to be used for generating responses. In this case, the model is gpt-4-1106-preview.

- openai_assistant_instructions: This setting provides a set of instructions for the assistant. These instructions guide the assistant's behavior when analyzing files and answering questions about performance stats.

- openai_assistant_prompt: This setting specifies the default prompt to be used when generating responses. The prompt sets the context for the conversation with the model.

- `openai_assistant_choice_1` to `openai_assistant_choice_4`: These settings define a set of predefined choices or commands that the assistant can respond to. Each choice represents a different type of request or question that the user might ask.

  - You must have four choices.

- `openai_delete_assistant_at_exit = true`: This setting determines whether the assistant should be deleted when the application exits. It's currently set to true, which means the assistant will be deleted at exit.