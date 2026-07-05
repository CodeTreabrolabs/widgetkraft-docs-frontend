"use client";
import React, { useEffect } from "react";

const FeedbackWidgetContext = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.widgetkraft.com/feedback.js";
    script.async = true;
    script.onload = () => {
      if (typeof FeedbackLoopWidget !== "undefined") {
        FeedbackLoopWidget.init({
          widgetId: "b5c5464f-2636-4c3e-b12d-b769b1b6d598",
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="feedbackloop-root"></div>;
};

export default FeedbackWidgetContext;