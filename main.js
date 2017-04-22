const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var mainActions = {
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
        action: function() {
            settings();
        }
    } 
};

var line = function() {
    console.log( '-----------------------------------------------------' );
}

var mainMenu = function() {
    
    console.log( "" );
    line();
    console.log( "BSM Software Manager" );
    line();

    for( a in mainActions ) {
        console.log( a + ' ....... ' + mainActions[a].name );
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
            var action = mainActions[ option ];
            if( action ) {
                action.action();
            }
            else {
                console.log( "Unknown action " + option );
            }
            mainMenu();
        }

    });

}

mainMenu();

