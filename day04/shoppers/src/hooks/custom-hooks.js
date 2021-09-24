
// useHook

import { useState } from "react";
import { useLocation } from "react-router";
import * as queryString from 'query-string'
const useCustomHook = (val) => {
    const [isLoading, setIsLoading] = useState(val);
    return `Component is loading: ${isLoading}`;
}
const useQueryParams = () => {
    const location = useLocation();
    return queryString.parse(location.search)
}
const useUserToken = () => {
    return localStorage.getItem('userToken')
}
export {useCustomHook, useQueryParams, useUserToken}