/**
 * Manage and persist the configuration
 * 
  */

let data = {
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

}

exports.addPath = ( newPath ) => {

    if( !data.installations[ 'newPath' ] ) {
        data.installations[ 'newPath' ] = {}
    }
    exports.save()

}



