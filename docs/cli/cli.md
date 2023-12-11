---
sidebar_position: 1
---

# CLI Syntax

`kel` helps in interacting with your AI assistants, modify company name,  prompts, model names, temperature, and tokens.

## Syntax

```bash
kel [-h] [-s SHOW] [-p PROMPT] [-m MODEL] [-t TEMPERATURE] [-mt MAX_TOKENS] [-c COMPANY] [-v] question
```

```
positional arguments:
  question              your question to Kel:

options:
  -h, --help            show this help message and exit
  -s SHOW, --show SHOW  show default config e.g general, stats, style, companies
  -p PROMPT, --prompt PROMPT
                        prompt e.g "You are a web performance expert. You are helping a developer."
  -m MODEL, --model MODEL
                        model name e.g gpt-4
  -t TEMPERATURE, --temperature TEMPERATURE
                        temperature e.g 0.9
  -mt MAX_TOKENS, --max_tokens MAX_TOKENS
                        max tokens e.g 150
  -c COMPANY, --company COMPANY
                        company name e.g OpenAI
  -v, --version         show version

```

### Commands

```bash
kel -v

>>> Kel 0.0.1
```

```bash
kel -h

>>> displays help options
```

```bash
kel -s stats

>>> displays stats key value pairs
```

```bash
kel "Hello"

>>> displays default AI assistant's reply
```

```bash
kel "git command to commit" -c anthropic -m claude-2.1

>>> displays Anthropic's Claude-2.1 model's response
```

```bash
kel -a perfGPT -f results.csv

>>> Enters into chat mode if `enable_openai_assistant` sets to `true`
```