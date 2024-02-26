import { useState } from "react";

const useFullName = (firstName: string, lastName: string) => {
    const [storedValue, setStoredValue] = useState<any>(firstName + " " + lastName);
    const setValue = (value: string) => {
        setStoredValue(value);
    }
    return [storedValue, setValue];
}

export default useFullName;