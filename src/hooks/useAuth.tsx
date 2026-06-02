"use client";
import { useState, useEffect } from 'react';


export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    /*useEffect(() => {
      setInterval(() => {
        const token = localStorage.getItem("authToken");
        console.log(token);
        if(token && token !== undefined){
          setIsAuthenticated(true);
        }
      }, 2000);

    }, []);
  */
    return { isAuthenticated, setIsAuthenticated};
  }