/**
 * Manage and persist the configuration
 * 
  */

exports.data = {
    currentInstallation: '',
    installations: {}
}

/**
 * Load configuration file ~/.bsm_installer/config.json
 */
exports.load = () => {

    mkdirp( installationsDir )
    let installations = fs.readdirSync( installationsDir )

}

/**
 * Save configuration to ~/.bsm_installer/config.json
 */
exports.save = () => {
    console.log( 'saving' )
}


exports.addPath = ( newPath ) => {

    if( !data.installations[ 'newPath' ] ) {
        data.installations[ 'newPath' ] = {}
    }
    exports.save()

}



