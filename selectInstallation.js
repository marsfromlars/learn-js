/**
 * Programm to select current installation
 * 
 */

exports.start = () => {

    let actions = {
        'C': {
            name: 'Create new installation',
            action: () => {
                rl.question( 'Enter path of installation', ( newPath ) => {
                    _config.addPath( newPath )
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
            if( fs.lstatSync( path ).isDirectory() ) {
                actions[ '' + index ] = {
                    name: 'Select installation: ' + file,
                    action: () => {
                        _config.data.currentInstallation = file
                        _config.save()
                    }
                }
            }
        }
    }

    _config.load()

    var menu = {
        title: `Select current installation
`,
        actions: actions,
        backAction: () => {
            _main.start();
        }
    }

    _menu.start( menu );

}



