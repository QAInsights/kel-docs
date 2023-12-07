---
sidebar_position: 2
---

# Style

`kel` supports variety of output text `styles`. Following are the default settings. 

To change the configuration, make the changes with the valid value and restart the app.

```toml title="config.toml"
[style]
response_color = "green"
warning_color = "yellow"
error_color = "red"
info_color = "cyan"
```

- `response_color = "green"`: This setting defines the color for response messages. The color is set to "green", which typically signifies success or completion in user interfaces. In the context of your application, this could be used to color messages that confirm a successful operation or provide a response to a user action.

- `warning_color = "yellow"`: This setting defines the color for warning messages. The color is set to "yellow", which is often used to signify caution or to draw attention to something that may require user intervention. This could be used to color messages that warn the user about potential issues or risks.

- `error_color = "red"`: This setting defines the color for error messages. The color is set to "red", which is commonly used to signify errors or problems. This could be used to color messages that inform the user about errors or failures in the application.

- `info_color = "cyan"`: This setting defines the color for informational messages. The color is set to "cyan", which could be used to provide a visual distinction for messages that provide additional information or context to the user.

For more colors, please refer [rich](https://rich.readthedocs.io/en/stable/appendix/colors.html#appendix-colors) documentation.

