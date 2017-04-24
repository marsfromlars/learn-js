/**
 * Programm to show and edit settings
 * 
 */
exports.settings = () => {

    var data = {
        path: '/home/projectile',
        version: 'desire'
    }

    let os = require( 'os' )
    
    var config = {
        title: `Settings

Path      : ${data.path}
Version   : ${data.version}
User home : ${os.homedir()}
`,
        actions: {
            'L': {
                name: 'Load settings',
                action: () => {
                    load();
                }
            }
        },
        backAction: () => {
            require( './main' ).start();
        }
    }

    require( './menu' ).menu( config );

    var load = function() {
        console.log( 'Loading...' )
    }

}



