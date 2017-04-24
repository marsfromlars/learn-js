
require( './global' )

var currentInstallation = '';

exports.start = () => {

    const settings = require( './settings' )
    const selectInstallation = require( './selectInstallation' )

    var config = {
        
        title: `BSM Software Manager

Current installation : ${currentInstallation}        
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
            },
            'S': {
                name: 'Settings',
                action: () => { settings.settings(); },
                isExit: true
            } 
        }
    };

    require( './menu' ).menu( config );

}

exports.start()
