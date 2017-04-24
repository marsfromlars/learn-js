
require( './global' )

var currentInstallation = '';

exports.start = () => {

    const settings = require( './settings' )
    const selectInstallation = require( './selectInstallation' )

    var menu = {
        
        title: `BSM Software Manager

Current installation : ${_config.data.currentInstallation}        
        `,
        isTopMenu: true,

        actions: {
            'I': {
                name: 'Select current installation',
                action: () => { selectInstallation.start(); },
                isExit: true
            },
            'D': {
                name: 'Download latest version',
                action: function() {
                    console.log( 'Downloading...' );
                }
            },
            'C': {
                name: 'Check for latest version',
                action: function() {
                    console.log( 'Checking...' );
                }
            },
            'U': {
                name: 'Update software',
                action: function() {
                    console.log( 'Updating...' );
                }
            } 
        }
    };

    _menu.start( menu );

}

exports.start()
