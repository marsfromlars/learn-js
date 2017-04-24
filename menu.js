/**
 * READ-EVAL-PRINT-LOOP for printMenu selection
 * 
 */
exports.menu = function ( config ) {

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
        if( !config.isTopMenu ) {
            console.log( "B ....... Back" );
        }
        console.log( "X ....... Exit" );

        line();
        console.log( "" );

        rl.question('Enter selection> ', (option) => {

            option = option ? option.toUpperCase() : "";

            if( option == "X"  ) {
                rl.close();
            }
            else if( option == "B" && !config.isTopMenu ) {
                if( config.backAction ) {
                    config.backAction();
                }
            }
            else {
                var action = config.actions[ option ];
                if( action ) {
                    if( action.isExit ) {
                        //rl.close();
                    }
                    action.action();
                    if( !action.isExit ) {
                        printMenu();
                    }
                }
                else {
                    console.log( "Unknown action " + option );
                    printMenu();
                }
            }

        });

    }

    printMenu();

}

