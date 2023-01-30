import { MagnifyingGlass } from "phosphor-react";

export function Header() {
	return (
		<header className="h-40 bg-gradient-to-r from-blue-400 to-indigo-500 ">
			<div className="flex flex-col items-around">
				<div className="flex justify-around items-around pt-8 pb-8 text-white">
					<h1 className="">Codelândia</h1>
					<h2>blog</h2>
				</div>
				<div className="flex">
					<input
						className="w-7/12 m-auto p-2 rounded opacity-40 placeholder:italic"
						type="text"
						placeholder="Pesquisar assunto..."
					/>
				</div>
			</div>
		</header>
	);
}
