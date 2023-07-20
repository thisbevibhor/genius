import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
	return (
		<>
			<p> Dashboard (Protected) </p>
			<UserButton afterSignOutUrl="\" />
		</>
	);
};
export default DashboardPage;
