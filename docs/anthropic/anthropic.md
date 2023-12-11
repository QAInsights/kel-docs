---
sidebar_position: 1
---

# Anthropic Assistant Config

You can configure the default model to use, prompts, maximum tokens, and more in this section.

By default it is configured to help in software engineering and command line tools.

> Get Anthropic API key from [here](https://console.anthropic.com/account/keys)  
> Anthropic pricing is available [here](https://www.anthropic.com/product).

```toml title="config.toml"
[anthropic]
# chat mode is not available for Anthropic yet
anthropic_enable_chat = false
default_anthropic_model_name = "claude-2.1"
default_anthropic_max_tokens = 100
default_anthropic_streaming_response = true
default_anthropic_prompt = """
You are an expert in the field of software engineering and command line tools.
If I ask for the commands, please give me only the commands which is enclosed in
quotes.
Give me the command in one sentence, unless I ask you to give it in a different way.
Do not return anything other than the command. Do not wrap responses in quotes.
"""
```

- `anthropic_enable_chat = false`: This option indicates whether the chat mode is enabled for Anthropic. In this case, it is set to false, which means the chat mode is not available.

- `default_anthropic_model_name = "claude-2.1"`: This option specifies the default model name to be used by Anthropic. The value is set to "claude-2.1".

- `default_anthropic_max_tokens = 100`: This option sets the default maximum number of tokens for Anthropic. Tokens are units of text used by the language model. In this case, the default maximum number of tokens is set to 100.

- `default_anthropic_streaming_response = true`: This option determines whether Anthropic should use streaming responses. If set to true, Anthropic will provide responses in a streaming manner.

- `default_anthropic_prompt = "..."`: This option sets the default prompt for Anthropic. A prompt is the initial input or instruction given to the language model. In this case, the default prompt is a multi-line string that provides instructions to the user. It asks the user to provide commands related to software engineering and command line tools, and specifies the format in which the commands should be given.
