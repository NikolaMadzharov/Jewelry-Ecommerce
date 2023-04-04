import { useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        const storedData = localStorage.getItem(key);
        return storedData !== null ? JSON.parse(storedData) : defaultValue;
    });

    const setLocalStorageValue = (newValue) => {
        if (newValue === undefined) {
            newValue = {};
        }
        newValue.userEmail
            ? (newValue = {
                username: newValue.username,
                email: newValue.userEmail,
                _id: newValue._Id,
                accessToken: newValue.token,

            })
            : (newValue = {});
        localStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
    };

    return [value, setLocalStorageValue];
};
