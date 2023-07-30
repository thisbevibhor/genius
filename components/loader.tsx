import Image from "next/image";

const Loader = () => {
	return (
		<div className="h-full flex flex-col gap-y-4 items-center justify-center">
			<div className="w-8 h-8 relative animate-spin">
				<Image alt="Logo" fill src="/logo.png" />
			</div>
			<p className="text-sm text-muted-foreground">Genius is thinking...</p>
		</div>
	);
};

export default Loader;
