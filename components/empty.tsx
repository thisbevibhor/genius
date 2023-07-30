import Image from "next/image";

interface EmptyProps {
	label: string;
}

const Empty = ({ label }: EmptyProps) => {
	return (
		<div className="h-full p-20 flex flex-col items-center justify-center">
			<div className="relative w-72 h-72">
				<Image src="/empty.png" alt="Empty" fill />
			</div>
			<p className="text-sm text-center text-muted-foreground">{label}</p>
		</div>
	);
};

export default Empty;
