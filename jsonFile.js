/**
 * Persistence in a json file
 * 
 */

module.exports = class JsonFile {
    
    constructor( file, obj ) {
        this.file = file
        if( obj ) {
            this.obj = obj
        }
        else {
            this.load()
        }
    }

    save() {
        global.fs.writeFileSync( this.file, JSON.stringify( this.obj ) )
    }

    load() {
        let data = global.fs.readFileSync( this.file )
        this.obj = JSON.parse( data )
    }

}

