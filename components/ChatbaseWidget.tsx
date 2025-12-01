"use client";

import { useEffect } from "react";

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
      /* Ensure minimize button is visible */
      button[aria-label*="minimize"],
      button[aria-label*="Minimize"],
      button[title*="minimize"],
      button[title*="Minimize"] {
        z-index: 10000 !important;
        pointer-events: auto !important;
      }
    `;
    
    // Only add style if it doesn't exist
    if (!document.getElementById("chatbase-widget-styles")) {
      document.head.appendChild(style);
    }

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

