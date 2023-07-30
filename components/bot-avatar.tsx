import { Avatar, AvatarImage } from "./ui/avatar";

const BotAvatar = () => {
	return (
		<Avatar className="h-8 w-8 mr-2">
			<AvatarImage className="p-1" src="/logo.png" />
		</Avatar>
	);
};

export default BotAvatar;
