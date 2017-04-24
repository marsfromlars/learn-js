/**
 * Programm to select current installation
 * 
 */

let fs = require( 'fs' )
let os = require( 'os' )

let config = global.config

let homeDir = os.homedir()
let installationsDir = homeDir + '/.bsm_installer/installations'
let rl = global.rl

//let mkdirp = require( 'mkdirp' )
//mkdirp( installationsDir )

exports.start = () => {

    let actions = {
        'C': {
            name: 'Create new installation',
            action: () => {
                rl.question( 'Enter path of installation', ( newPath ) => {
                    config.addPath( newPath )
                })
            }
        },
        'R': {
            name: 'Remove installation',
            action: () => {

            }
        }
    }

    let index = 1

    if( fs.existsSync( installationsDir ) ) {
        let files = fs.readdirSync( installationsDir )
        for( i in files ) {
            let file = files[ i ]
            let path = installationsDir + '/' + file
            if( fs.lstatSync( file ).isDirectory() ) {
                actions[ '' + index ] = {
                    name: 'Select installation: ' + file
                }
            }
        }
    }

    require( './config' ).load()

    var config = {
        title: `Select current installation
`,
        actions: actions,
        backAction: () => {
            require( './main' ).start();
        }
    }

    require( './menu' ).menu( config );

}



