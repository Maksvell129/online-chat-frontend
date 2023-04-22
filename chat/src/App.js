import React from "react";
import useWebSocket, {ReadyState} from "react-use-websocket";
import "./App.css"
import AuthProvider from "./contexts/auth/AuthProvider";
import AppRouter from "./AppRouter";

export default function App() {

    return (
        <AuthProvider>
            <AppRouter/>
        </AuthProvider>
    )
}
