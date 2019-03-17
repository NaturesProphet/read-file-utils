const fs = require( 'fs' );
/**
 * Returns the first line that maths the beginText string provided
 * @param filename path to the file to be readed
 * @param encoding encoding of the file. ex: 'utf-8'
 * @param beginText first characters on begin of the line wanted
 * @returns Promise string
 */
getLineByBegin = function ( filename, encoding, beginText ) {
    return new Promise( function ( resolve, reject ) {
        try {
            fs.readFile( filename, encoding, function ( err, data ) {
                var lines = data.split( /\r?\n/ );
                lines.forEach( function ( line ) {
                    if ( line.substring( 0, beginText.length ) == beginText ) {
                        resolve( line );
                    }
                } );
                // returns null if no maths found
                resolve( null );
            } );
        } catch ( error ) {
            reject( error );
        }
    } );
};

module.exports = { getLineByBegin };