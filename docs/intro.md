---
sidebar_position: 1
---

# Intro

Let's discover **Kel in less than 5 minutes**.

## Getting Started

Kel is your AI assitant in your CLI. 

## What you'll need

- Python3 or above
- respective LLM's API keys

## How to get started?

Clone `kel` repo to your local.

```bash
pip3 install -r requirements
```

```bash
python3 app.py -h
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

## Hello, World!

Once the API key and `config.toml` is configured; invoke the AI from your CLI.

```bash
# set an alias in your bash profile
alias kel="python3 /path/to/kel-repo"
```
```bash
source ~/.bash_profile
```
```bash
kel "git command to rebase"
```

By default, your AI assistant is an expert in software engineering field. To use it for general purposes add the `-p` flag.

```bash
kel "Hello, What's the population of New York?" -p "You are a demography expert"
```