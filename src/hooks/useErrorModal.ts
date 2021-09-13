import {useState} from 'react';

const initError = {
  open:false,
  text: ''
}
const useErrorModal = () => {
  const [error, setError] = useState(initError)
  
  const createError = (text: string) => {
    setError({open: true, text});
  }
  const handleResetError= () => {
    setError(initError);
  }
  
  return {
    error,
    createError,
    handleResetError

  }
}
export default useErrorModal;