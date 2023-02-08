import { Heart } from "phosphor-react";
import content from "../data/cardContent.json";

export function Card() {
	return (
		<>
			{content.map((item) => (
				<section className="bg-white mb-6 mx-16 md:mx-40 rounded-xl">
					<div className="px-7 py-3">
						<div className="flex justify-between items-center pb-5">
							<h6 className="text-sm">{item.date}</h6>
							<Heart size={24} className="text-indigo-500" />
						</div>
						<div>
							<h1 className="font-medium text-xl ">{item.title}</h1>
							<p className="text-lg text-gray-500 pt-2">{item.text}</p>
						</div>
					</div>
				</section>
			))}
		</>
	);
}
