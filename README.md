# Statamic character counting field

![Statamic 3.0+](https://img.shields.io/badge/Statamic-3.0+-FF269E?style=for-the-badge&link=https://statamic.com)

> An input field or textarea which shows the status of the length
> with colored feedback on the input element.

## Installation

Install with Composer:

    composer require appswithlove/statamic-charfield

## Usage

Use the «Extended Section» field and choose the background you like in the blueprint editor.

### Configuration

| Option        | Description                            |
|---------------|----------------------------------------|
| `input_type`  | Choose between input or textarea       |
| `low`         | Minimal length                         |
| `high`        | Maximal length                         |
| `optimal_min` | Optional min length for optimal result |
| `optimal_max` | Optional max length for optimal result |
| `hard_limit`  | Maxlength for input field              |

- If the length is outside of min and max the color is **red**.
- If the length is between min and max but not between the optimal length **dark yellow**
- If the length is in the optional range or between min and max if no optimal length is provided the color is **green**

## Screenshot

![CharField](https://raw.githubusercontent.com/appswithlove/statamic-charfield/master/screenshot-v3.png)
