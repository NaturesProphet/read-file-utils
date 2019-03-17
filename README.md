# read-file-utils

Utilities for reading and manipulating text files using javascript

## List of functions
```
1 getLineByBegin();
```

## How to use

### getLineByBegin()
```
getLineByBegin(path-to-the-file, encoding, first-characteres-of-the-line)
```

This function search a text file and returns the first line that maths the keyword provided. it uses async/await syntax.  
Example:
```
var fileUtils = require('read-file-utils');

async function showSomeString() {
    let file = './path-to-the-file.txt';
    let firstWords = 'my phrase starts here';

    let lineWanted = await fileUtils.getLineByBegin(file,'utf-8',firstWords);
    console.log(lineWanted);
}

showSomeString();
```
