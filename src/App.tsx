import { Card } from "./components/Card";
import { Header } from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<main className=" bg-slate-200 py-10">
				<Card />
			</main>
		</>
	);
}

export default App;
