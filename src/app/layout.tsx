"use client"
import { Outfit } from 'next/font/google';
import React, {useState, useEffect, Suspense} from "react";
import { usePathname, redirect } from 'next/navigation';
import './globals.css';
import "flatpickr/dist/flatpickr.css";
import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { useAuth } from '@/hooks/useAuth';

//import SignIn from '../app/(full-width-pages)/(auth)/signin/page'

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const pathName = usePathname();
  

  const {isAuthenticated, setIsAuthenticated} = useAuth();//useState(true);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {

    const checkAuthIntv = setInterval(() => {
      const token = localStorage.getItem("authToken");
      const path = window.location.pathname;
      
      if(token && token !== undefined && path === "/signin" ){
        redirect('/');
      }
      
      if((!token || token === undefined) && path !== "/signin" ){
        redirect('/signin');
      }
      setIsLoading(false);
      
    }, 2000);

    return () => clearInterval(checkAuthIntv);
     
  }, []);

  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-gray-900`}>                            
        <ThemeProvider>
          <Suspense fallback={<p className='flex align-middle justify-center mt-52'>Loading component...</p>}>
             <SidebarProvider>{!isLoading? children: ""}</SidebarProvider>
            
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
