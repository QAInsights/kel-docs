---
sidebar_position: 4
---

# Companies

`kel` supports multiple AI companies LLMs (Large Language Model) such as OpenAI, Anthropic, and more.

```toml title="config.toml"
[companies]
supported_companies = ["OpenAI", "Anthropic", "Ollama"]
```

This setting defines an array of supported companies. This will help in validate user inputs, filter data, or control certain API behaviors based on the company's LLM.