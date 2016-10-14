# Statamic Char counting field

A field which can does hint the status of the length
with a colored border on the input element.

## Configuration

| Option        | Description                            |
|---------------|----------------------------------------|
| `min`         | Minimal length                         |
| `max`         | Maximal length                         |
| `optimal_min` | Optional min length for optimal result |
| `optimal_max` | Optional max length for optimal result |
| `hard_limit`  | Maxlength for input field              |

* If the length is outside of min and max the color is **red**.
* If the length is between min and max but not between the optimal length **orange**
* If the length is in the optional range or between min and max if no optimal length is provided the color is **green**