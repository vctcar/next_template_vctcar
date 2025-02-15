"use client"

import React from "react";
import { Amplify } from "aws-amplify";
import "./../app/app.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

export default function Page() {
  return (
    <html lang="en">
      <body>      
        <Authenticator>
          <div>
            {/* Your page content goes here */}
          </div>
        </Authenticator>
      </body>
    </html>
  );
}
