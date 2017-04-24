/**
 * Programm to select current installation
 * 
 */

let fs = require( 'fs' )
let os = require( 'os' )
let homeDir = os.homedir()
let installationsDir = homeDir + '/.bsm_installer/installations'

//let mkdirp = require( 'mkdirp' )
//mkdirp( installationsDir )

exports.start = () => {

    let actions = {}
    let index = 1

    if( fs.existsSync( installationsDir ) ) {
        let files = fs.readdirSync( installationsDir )
        for( i in files ) {
            let file = installationsDir + '/' + files[ i ]
            if( fs.lstatSync( file ).isDirectory() ) {
                actions[ '' + index ] = {
                    name: 'Installation ' + files[ i ]
                }
            }
        }
    }

    require( './config' ).load()

    var config = {
        title: `Select current installation
`,
        actions: actions,
        exitAction: () => {
            require( './main' ).start();
        }
    }

    require( './menu' ).menu( config );

}



