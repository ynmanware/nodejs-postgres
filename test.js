const parse = require('csv-parse')
const assert = require('assert')
const output = []
// Create the parser
const parser = parse({
    delimiter: ':'
})
// Use the readable stream api
parser.on('readable', function(){
    let record
    while (record = parser.read()) {
        output.push(record)
    }
})
// Catch any error
parser.on('error', function(err){
    console.error(err.message)
})
// When we are done, test that the parsed output matched what expected
parser.on('end', function(){
    assert.deepEqual(
        output,
        [
            [ 'root','x','0','0','root','/root','/bin/bash' ],
            [ 'someone','x','1022','1022','','/home/someone','/bin/bash' ]
        ]
    )
})
// Write data to the stream
parser.parse('dfd, er ,e', {
    trim: true,
    skip_empty_lines: true
})
// Close the readable stream
parser.end()