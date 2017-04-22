/**
 * READ-EVAL-PRINT-LOOP for printMenu selection
 * 
 */
function repl( config ) {

    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var line = function() {
        console.log( '-----------------------------------------------------' );
    }

    var printMenu = function() {
        
        console.log( "" );
        line();
        console.log( config.title );
        line();

        for( a in config.actions ) {
            console.log( a + ' ....... ' + config.actions[a].name );
        }

        console.log( "" );
        console.log( "X ....... Exit" );
        line();
        console.log( "" );

        rl.question('Enter selection> ', (option) => {

            option = option ? option.toUpperCase() : "";

            if( option == "X" ) {
                console.log( "Bye bye." );
                console.log( "" );
                rl.close();
            }
            else {
                var action = config.actions[ option ];
                if( action ) {
                    action.action();
                }
                else {
                    console.log( "Unknown action " + option );
                }
                printMenu();
            }

        });

    }

    printMenu();

};
