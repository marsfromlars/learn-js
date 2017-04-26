let test = require( 'tape' )
let tmp = require( 'tmp' )
let JsonFile = require( '../jsonFile' )

global.fs = require( 'fs' )

test('load save', function (t) {

    let obj = {
        title: 'hello',
        age: 10,
        o: {
            a: 'B',
            c: 'D'
        },
        a: [ 'World', '!' ]
    }

    let file = tmp.fileSync().name

    let j = new JsonFile( file, obj )
    j.save()

    let j1 = new JsonFile( file )

    t.deepEqual( j1, j )

    t.end()

});

