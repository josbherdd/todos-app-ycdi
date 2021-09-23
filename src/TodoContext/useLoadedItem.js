import React from 'react';

function useLoadedItem() {
    
    const [ loaded, setLoaded ] = React.useState( false )

    React.useEffect( () => {
        setTimeout(() => {
            setLoaded( true )
        }, 3000);
    } );

    return{ loaded }

}

export{ useLoadedItem };

