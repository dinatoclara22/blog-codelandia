import { MagnifyingGlass } from "phosphor-react";

export function Header() {
	return (
		<header className="w-full py-8 bg-gradient-to-r from-blue-400 to-indigo-500">
			<div className="flex flex-col">
				<div className="flex justify-around items-center pb-8 text-white">
					<h1 className="">Codelândia</h1>
					<h2>blog</h2>
				</div>
				<form action="" className="w-full flex justify-center items-center">
					<input
						className="w-full mx-16 md:mx-40 p-2 rounded opacity-40 placeholder:italic"
						type="text"
						placeholder="Pesquisar assunto..."
					/>
				</form>
			</div>
		</header>
	);
}
