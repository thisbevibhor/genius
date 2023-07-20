import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
	return (
		<>
			<h1>Landing Page (Unprotected) </h1>
			<Link href="/sign-in">
				<Button>Login</Button>
			</Link>
			<Link href="/sign-up">
				<Button>Register</Button>
			</Link>
		</>
	);
};
export default LandingPage;
