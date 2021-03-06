/**
 * Global stuff for the whole project
 * 
 */

global.fs = require( 'fs' )
global.os = require( 'os' ) // operating system info
global.mkdirp = require( 'mkdirp' ) // mkdir recursively (just like: mkdir -p)
global.readline = require( 'readline' ); // input output via console

// --- OWN GLOBAL MODULES -----------------

global._config = require( './config' )
global._menu = require( './cliMenu' ) // a CLI base menu
global._main = require( './main' ) // main menu

// --- GLOBAL VARIABLES -------------------

global.homeDir = os.homedir()
global.installationsDir = homeDir + '/.bsm_installer/installations'

global.rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


