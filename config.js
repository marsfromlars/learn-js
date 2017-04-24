/**
 * Manage and persist the configuration
 * 
  */

let os = require( 'os' )
let fs = require( 'fs' )
let mkdirp = require( 'mkdirp' )
let homeDir = os.homedir()
let installationsDir = homeDir + '/.bsm_installer/installations'

exports.load = () => {

    mkdirp( installationsDir )
    let installations = fs.readdirSync( installationsDir )

}



