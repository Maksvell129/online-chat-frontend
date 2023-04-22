import ChatPage from "./pages/ChatPage"
import LoginPage from "./pages/LoginPage"
import RegistrationPage from "./pages/RegistrationPage"

export const privateRoutes = [
    {path: '/chat', element: <ChatPage/>}
]


export const publicRoutes = [
    {path: '/login', element: <LoginPage/>},
    {path: '/registration', element: <RegistrationPage/>}
]