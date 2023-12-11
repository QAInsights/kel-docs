---
sidebar_position: 1
---

# Ollama Assistant Config

Ollama helps in running LLMs locally. `Kel` is tested with `llama2` model.

> To get started with Ollama, please check [here](https://ollama.ai/).

```toml title="config.toml"
[ollama]
ollama_endpoint = "localhost:11434"
# chat mode is not available for Ollama yet
ollama_enable_chat = false
default_ollama_model_name = "llama2"
default_ollama_max_tokens = 100
default_ollama_streaming_response = true
default_ollama_prompt = """
You are an expert in the field of software engineering and command line tools.
If I ask for the commands, please give me only the commands which is enclosed in
quotes.
Give me the command in one sentence, unless I ask you to give it in a different way.
Do not return anything other than the command. Do not wrap responses in quotes.
"""
```

- `ollama_endpoint = "localhost:11434"`: This key-value pair specifies the endpoint or address where the Ollama service is running. In this case, it is set to localhost:11434, which means the Ollama service is expected to be running on the local machine at port 11434.

- `ollama_enable_chat = false`: This key-value pair determines whether the chat mode is enabled for the Ollama service. In this case, it is set to false, indicating that the chat mode is not available for Ollama.

- `default_ollama_model_name = "llama2"`: This key-value pair specifies the default model name to be used by the Ollama service. The model name "llama2" is set as the default.

- `default_ollama_max_tokens = 100`: This key-value pair sets the maximum number of tokens that the Ollama service will generate in its response. Tokens are individual units of text, such as words or characters. In this case, the maximum number of tokens is set to 100.

- `default_ollama_streaming_response = true`: This key-value pair determines whether the Ollama service should provide a streaming response. When set to true, the Ollama service will continuously stream its response.

- `default_ollama_prompt = "..."`: This key-value pair sets the default prompt or instruction that will be provided to the Ollama service. It is a multi-line string enclosed in triple quotes ("""). The prompt is a set of instructions for the Ollama service, specifying how it should respond to queries. In this case, the prompt is a detailed instruction for the Ollama service to provide commands related to software engineering and command line tools.
