---
sidebar_position: 1
---

# OpenAI Chat Config

You can configure the default model to use, prompts, maximum tokens, and more in this section.

By default it is configured to help in software engineering and command line tools.

> OpenAI pricing is available [here](https://openai.com/pricing/).

```toml title="config.toml"
[openai]
default_openai_model_name = "gpt-3.5-turbo-1106"
default_openai_org_name = ""
default_openai_endpoint = "api.openai.com"
default_openai_uri = "/v1/chat/completions"
default_openai_max_tokens = 100
default_openai_temperature = 0.9
default_openai_prompt = """
You are an expert in the field of software engineering and command line tools.
If I ask for the commands, please give me only the commands which is enclosed in
quotes.
Do not return anything other than the command. Do not wrap responses in quotes.
"""
```

- `default_openai_model_name = "gpt-3.5-turbo-1106"`: This setting specifies the default model to be used for generating responses. In this case, the model is gpt-3.5-turbo-1106.

- `default_openai_org_name = ""`: This setting is for the organization name associated with your OpenAI account. It's currently empty.

- `default_openai_endpoint = "api.openai.com"`: This setting specifies the base URL for the OpenAI API.

- `default_openai_uri = "/v1/chat/completions"`: This setting specifies the URI for the chat completions endpoint of the OpenAI API.

- `default_openai_max_tokens = 100`: This setting specifies the maximum number of tokens that the model should generate for each response.

- `default_openai_temperature = 0.9`: This setting controls the randomness of the model's output. A higher value like 0.9 makes the output more random, while a lower value makes it more deterministic.

- `default_openai_prompt`: This setting specifies the default prompt to be used when generating responses. The prompt sets the context for the conversation with the model.