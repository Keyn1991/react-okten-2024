import {createBrowserRouter} from "react-router-dom";

import {HomePage} from "./pages/HomePage";
import {Todos} from "./components/Todos/Todos";
import {Comments} from "./components/Comments/Comments";
import {Albums} from "./components/Albums/Albums";

const router = createBrowserRouter([
    {
        path: '/', element: <HomePage/>, children: [
    {
        path: 'todos', element: <Todos/>
    },
    {
        path: 'albums', element: <Albums/>
    },
    {
        path: 'comments', element: <Comments/>
    }

        ]
    },
])

export {router}