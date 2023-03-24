import { useState } from 'react';

export const useValidation = (validateFunc:(value:any) => boolean, initalValue: any) => {
    const [state, setState] = useState(initalValue);
    const [isValid, setisValid] = useState<boolean>(validateFunc(state));
}