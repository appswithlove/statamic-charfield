# Statamic character counting field ![Statamic 3](https://img.shields.io/badge/statamic-3.x-blue.svg?style=flat-square)

[![StyleCI](https://styleci.io/repos/75275215/shield?branch=master)](https://styleci.io/repos/75275215)

An input field or textarea which shows the status of the length
with colored feedback on the input element.

![CharField](https://raw.githubusercontent.com/appswithlove/statamic-charfield/master/screenshot-v3.png)

## Configuration

| Option        | Description                            |
|---------------|----------------------------------------|
| `input_type`  | Choose between input or textarea       |
| `min`         | Minimal length                         |
| `max`         | Maximal length                         |
| `optimal_min` | Optional min length for optimal result |
| `optimal_max` | Optional max length for optimal result |
| `hard_limit`  | Maxlength for input field              |

 - If the length is outside of min and max the color is **red**.
 - If the length is between min and max but not between the optimal length **dark yellow**
 - If the length is in the optional range or between min and max if no optimal length is provided the color is **green**
