---
sidebar_position: 1
---

# Intro

Let's discover **Kel in less than 5 minutes**.

## Demo

<a href="https://asciinema.org/a/626190" target="_blank"><img src="https://asciinema.org/a/626190.svg" /></a>

## Getting Started

Kel is your AI assitant in your CLI. 

## What you'll need

- Python3.6 or above
- pip
- respective LLM's API keys

## How to get started?

Clone `kel` repo to your local.

```bash
cd kel
pip install .
```
You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.


## Configuration

The heart of `kel` is your `config.toml`. 

`config.toml` holds all your personal settings, style, LLM to use, and more.

## API Keys

Configure your LLM's API keys in your operating system's environment variables.

```bash
export OPENAI_API_KEY="sk-...AbyZ"
```
```bash
export ANTHROPIC_API_KEY="sk-ant-...ZZZ"
```

## Usage

Once the API key and `config.toml` is configured; invoke the AI from your CLI.

```bash
kel -v
```

```bash
kel -h
```

```bash
kel "git command to rebase"
```

```bash
kel "command to get active connections in linux"
```

```bash
kel "What was the population of India in 1990?"

>>> I'm sorry, I can only assist with questions related to software engineering and command line tools. 
I am unable to provide information on the population of India in 1990.
```

Now change the prompt and ask the same question.
```bash
kel "What was the population of India in 1990?" -p "You are a demography expert" 

>>> The population of India in 1990 was around 874 million people.
```

Now change the LLM and ask the same question.
```bash
kel "What was the population of India in 1990?" -p "You are a demography expert" -c ollama -m llama2 
```

### OpenAI Assistant

OpenAI assistant helps in interacting with your documents to get insights, analyze, and more.

```bash
kel -a perfGPT -f <file_name>
```

This will enter you into chat mode with your assistant to ask questions.

Upon exiting, the assistant and files will be deleted.