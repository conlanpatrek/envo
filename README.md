# Envo
Read environment variables defined in files into `process.env`.

## Installation
```
npm install envo --save-dev
```

## Usage & Examples
### env.json
```json
{
    "API_LOCATION": "http://myapi.tld/api"
}
```

### env.fallbacks.json
```json
{
    "API_LOCATION": "localhost:3000/api"
}
```

### .gitignore
```
env.json
```

### Some build file
Could be `webpack.config.js`, or a gulp task, whatever.

```javascript
require('envo')('env.fallbacks.json', 'env.json')
```

or

``` javascript
import envo from 'envo'
envo('env.fallbacks.json', 'env.json')
```
