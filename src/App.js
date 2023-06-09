import "./App.css";
import Login from "./template/pages/Login/Login";
import Register from "./template/pages/Register/Register";
import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";
import Layout from "./template/components/Layout/Layout";
import About from "./template/pages/About/About";
import Shop from "./template/pages/Shop/Shop";
import OTP from "./template/components/OTP/OTP";

function App() {
	const { path, url } = useRouteMatch();
	console.log("== Path ==", path);
	console.log(url);
	return (
		<>
			<Switch>
				<Route path={"/home"}>
					<Layout showNav={true}></Layout>
				</Route>
				<Route path={"/register"} exact>
					<Layout showNav={false}>
						<Register />
					</Layout>
				</Route>
				<Route path={"/login"}>
					<Layout showNav={false}>
						<Login />
					</Layout>
				</Route>
				<Route path={"/about"}>
					<Layout showNav={true}>
						<About />
					</Layout>
				</Route>
				<Route path={"/shop"}>
					<Layout showNav={true}>
						<Shop />
					</Layout>
				</Route>
				<Route path={"/contact"}>
					<Layout showNav={true}></Layout>
				</Route>
			</Switch>
		</>
	);
}

export default App;
