import React from 'react';

function useLocalStorage( itemName, initialValue ) {

    const [error, setError] = React.useState( false );
  
    const [loading, setLoading] = React.useState( true );
  
    const [ item, setItem ] = React.useState(initialValue);

    React.useEffect( () => {
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
    
          //esta primera condicional ( !localStorageItem ) revisa si es null undeff, false o un string vacío, o si no hay alguna versión anterior
          if( !localStorageItem ) {
            localStorage.setItem( itemName, JSON.stringify(initialValue) );
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse( localStorageItem );
          }
    
          setItem( parsedItem );
          setLoading( false )
        } catch( error ) {
          setError( error )
        }
      }, 3000);
    });
  
    const itemSalvado = ( newItem ) => {
      try{
        const itemStringifeados = JSON.stringify( newItem );
      localStorage.setItem( itemName, itemStringifeados );
      setItem( newItem );
      } catch( error ) {
        setError( error )
      }
    };
  
    return {
      item,
      itemSalvado,
      loading,
      error,
    }
  
  };

export { useLocalStorage };