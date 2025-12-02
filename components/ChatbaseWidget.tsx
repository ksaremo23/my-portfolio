"use client";

import { useEffect } from "react";

// Extend Window interface for Chatbase
declare global {
  interface Window {
    chatbase?: {
      open: () => void;
      close: () => void;
      isOpen: () => boolean;
      (method: string, ...args: any[]): any;
      q?: any[][];
    };
  }
}

export default function ChatbaseWidget() {
  useEffect(() => {
    // Ensure we're in the browser
    if (typeof window === "undefined") return;

    // Check if script is already loaded
    if (document.getElementById("xqV6ywsW-AvP-Jv-zKjJn")) {
      return;
    }

    // Execute the Chatbase embed code directly
    const embedCode = `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="xqV6ywsW-AvP-Jv-zKjJn";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`;
    
    // Use Function constructor to execute the code
    try {
      const executeEmbed = new Function(embedCode);
      executeEmbed();
    } catch (error) {
      console.error("Error loading Chatbase widget:", error);
    }

    // Add CSS to ensure Chatbase widget is accessible and can be minimized
    const style = document.createElement("style");
    style.id = "chatbase-widget-styles";
    style.textContent = `
      /* Ensure Chatbase widget is above other content */
      iframe[src*="chatbase.co"],
      div[id*="chatbase"],
      div[class*="chatbase"] {
        z-index: 9999 !important;
      }
      /* Ensure minimize button is visible and clickable */
      button[aria-label*="minimize"],
      button[aria-label*="Minimize"],
      button[title*="minimize"],
      button[title*="Minimize"],
      button[class*="minimize"],
      button[class*="close"] {
        z-index: 10000 !important;
        pointer-events: auto !important;
        cursor: pointer !important;
      }
      /* Make sure the chat bubble button works */
      button[class*="bubble"],
      div[class*="bubble"] {
        z-index: 9999 !important;
        pointer-events: auto !important;
        cursor: pointer !important;
      }
    `;
    
    // Only add style if it doesn't exist
    if (!document.getElementById("chatbase-widget-styles")) {
      document.head.appendChild(style);
    }

    // Wait for Chatbase to initialize and add minimize functionality
    const setupMinimizeHandler = () => {
      // Check if chatbase is available
      if (typeof window.chatbase === "undefined") {
        // Retry after a short delay
        setTimeout(setupMinimizeHandler, 500);
        return;
      }

      // Function to handle minimize button clicks
      const handleMinimizeClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        
        // Check if clicked element is a minimize/close button
        const isMinimizeButton = 
          target.getAttribute("aria-label")?.toLowerCase().includes("minimize") ||
          target.getAttribute("title")?.toLowerCase().includes("minimize") ||
          target.getAttribute("aria-label")?.toLowerCase().includes("close") ||
          target.classList.toString().toLowerCase().includes("minimize") ||
          target.classList.toString().toLowerCase().includes("close");

        if (isMinimizeButton && window.chatbase) {
          // Use Chatbase API to close the chat
          try {
            if (typeof window.chatbase.close === "function") {
              window.chatbase.close();
            } else if (typeof window.chatbase === "function") {
              window.chatbase("close");
            }
          } catch (error) {
            console.error("Error closing Chatbase widget:", error);
          }
        }
      };

      // Add click event listener to document to catch minimize button clicks
      document.addEventListener("click", handleMinimizeClick, true);

      // Also try to find and enhance the minimize button directly
      const findAndEnhanceMinimizeButton = () => {
        const minimizeButtons = document.querySelectorAll(
          'button[aria-label*="minimize"], button[aria-label*="Minimize"], button[title*="minimize"], button[title*="Minimize"], button[class*="minimize"], button[class*="close"]'
        );

        minimizeButtons.forEach((button) => {
          button.addEventListener("click", (e) => {
            e.stopPropagation();
            if (window.chatbase) {
              try {
                if (typeof window.chatbase.close === "function") {
                  window.chatbase.close();
                } else if (typeof window.chatbase === "function") {
                  window.chatbase("close");
                }
              } catch (error) {
                console.error("Error closing Chatbase widget:", error);
              }
            }
          });
        });
      };

      // Try to find minimize button after widget loads
      setTimeout(findAndEnhanceMinimizeButton, 1000);
      setTimeout(findAndEnhanceMinimizeButton, 2000);
      setTimeout(findAndEnhanceMinimizeButton, 3000);
    };

    // Start setting up minimize handler
    setupMinimizeHandler();

    // Cleanup function
    return () => {
      const existingScript = document.getElementById("xqV6ywsW-AvP-Jv-zKjJn");
      if (existingScript) {
        existingScript.remove();
      }
      const existingStyle = document.getElementById("chatbase-widget-styles");
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  return null;
}

