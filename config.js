/**
 * Manage and persist the configuration
 * 
  */

exports.config = {

    data: {
        currentInstallation: '',
        installations: {}
    },

    /**
     * Load configuration file ~/.bsm_installer/config.json
     */
    load = () => {

        mkdirp( installationsDir )
        let installations = fs.readdirSync( installationsDir )

    },

    /**
     * Save configuration to ~/.bsm_installer/config.json
     */
    save = () => {
        console.log( 'saving' )
    }

}




exports.addPath = ( newPath ) => {

    if( !data.installations[ 'newPath' ] ) {
        data.installations[ 'newPath' ] = {}
    }
    exports.save()

}



