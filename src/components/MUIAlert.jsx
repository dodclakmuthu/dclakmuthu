import React, {useState, useEffect, createContext} from 'react'

import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';


//const NotificationContext = createContext();

function MUIAlert({type, message}) {
  const [show, setShow] = useState(true)
  useEffect(()=>{
    const timeId = setTimeout(() => setShow(false), 3000)

    return () =>{clearTimeout(timeId)}
  },[])
  if(!show) {
    return null;
  }

  return (
    <Stack>
    <Alert severity={type}>
      <AlertTitle>{type}</AlertTitle>
      {message}
    </Alert>
  </Stack>
  )
}

export default MUIAlert;
//export {NotificationContext};