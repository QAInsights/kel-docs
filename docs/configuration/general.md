---
sidebar_position: 1
---

# General

`kel` supports variety of configuration. Following are the default settings. 

To change the configuration, make the changes with the valid value and restart the app.

```toml title="config.toml"
[general]
protocol = "https"
default_language = "english"
default_company_name = "OpenAI"
copy_to_clipboard = true
display_llm_company_model_name = true
```

- `protocol = "https"`: This setting specifies the protocol to be used for communication. In this case, the protocol is set to "https", which stands for Hypertext Transfer Protocol Secure. It is a secure version of HTTP that encrypts the data being transmitted.

- `default_language = "english"`: This setting defines the default language to be used. In this case, the default language is set to "english". This setting can be used to determine the language for displaying content or handling localization in the project.

- `default_company_name = "OpenAI"`: This setting specifies the default company name. In this case, the default company name is set to "OpenAI". This setting can be used to display the company name in various parts of the project or application.

- `copy_to_clipboard = true`: This setting determines whether the content should be copied to the clipboard. In this case, it is set to true, indicating that the content should be copied to the clipboard. This setting can be used to enable or disable the copy functionality in the project.

- `display_llm_company_model_name = true`: This setting determines whether the company name should be displayed or not.