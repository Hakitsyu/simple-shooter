# Simple Shooter
## Made with **canvas**

A simple shooter made with only **HTML**, **JavaScript** and **Canvas**
It's only a study project

## Features

- Use as an example for other projects
- Configurate the application

## Config
The **configuration file** is found in the **root folder** and is named `config.js`
You can adjust the width, height, shoot velocity, target width, target height and the target spawn time.

#### Default Config
```js
{
    width: 1500,
    height: 600,
    shoot_velocity: 12,
    target: {
        width: 10,
        height: 10,
        spawn_time: 1500
    }
}
```

#### Parameters
| Key | Description | Type |
| ------ | ------ | ------ |
| width | Game area width | number |
| height | Game area height | number |
| shoot_velocity | Shoot velocity | number |
| target | Target configurations | **Target** |

#### **Target** Parameters
| Key | Description | Type |
| ------ | ------ | ------ |
| width | Target width | number |
| height | Target height | number |
| spawn_time | Target spawn time in milliseconds | number |