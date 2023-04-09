import React from "react";
import useWebSocket, {ReadyState} from "react-use-websocket";
import "./App.css"
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProtectedRoute from "./components/Routes/ProtectedRoute";

export default function App() {
    // const { readyState } = useWebSocket("ws://127.0.0.1:8000/", {   //урл бэка (ждать пока Боги сделают сервер)
    //   onOpen: () => {
    //     console.log("Connected!");
    //   },
    //   onClose: () => {
    //     console.log("Disconnected!");
    //   }
    // });

    // const connectionStatus = {
    //   [ReadyState.CONNECTING]: "Connecting",
    //   [ReadyState.OPEN]: "Open",
    //   [ReadyState.CLOSING]: "Closing",
    //   [ReadyState.CLOSED]: "Closed",
    //   [ReadyState.UNINSTANTIATED]: "Uninstantiated"
    // }[readyState];

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="*" element={<LoginPage/>}/>
                <Route
                    path="/chat"
                    element={
                        // заглушка
                        <ProtectedRoute isLoggedIn={true}>
                            <ChatPage/>
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}
