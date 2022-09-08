import SignIn from "./Auth/Signin";
import SignUp from "./Auth/Singup";
import VideoList from "./Video/VideoList";
import Video from './Video/Video';
import Header from './Navbar/Header'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";



export default function Index(props) {
    const { isLoggedIn, setLoggedIn } = props
    return (
        <div>
            <Header isLoggedIn={isLoggedIn} />
            <BrowserRouter>
                {isLoggedIn ?
                    <Routes>
                        <Route path="/video" element={<VideoList setLoggedIn={setLoggedIn} />}>
                        </Route>
                        <Route path="/video/:id" element={<Video setLoggedIn={setLoggedIn} />}>
                        </Route>
                    </Routes>
                    :
                    <Routes>
                        <Route path="/" element={<SignIn setIsLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />}>
                        </Route>
                        <Route path="/signup" element={<SignUp setIsLoggedIn={setLoggedIn} />}>
                        </Route>
                    </Routes>
                }
            </BrowserRouter>
        </div>

    )
}