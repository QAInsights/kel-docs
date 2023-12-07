---
sidebar_position: 3
---

# Stats

`kel` supports variety of stats at the end of each command. Following are the default settings. 

To change the configuration, make the changes with the valid value and restart the app.

```toml title="config.toml"
[stats]
display_cost = true
display_tokens = true
display_response_time = true
```

- `display_cost`: Specifies whether to display the cost statistics.
- `display_tokens`: Specifies whether to display the token statistics.
- `display_response_time`: Specifies whether to display the response time statistics.