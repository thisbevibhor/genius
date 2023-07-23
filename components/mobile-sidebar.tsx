"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";
import { Menu } from "lucide-react";
// import dynamic from "next/dynamic";

// const DynamicMenu = dynamic(() => import("lucide-react").then((module) => module.Menu), {
// 	ssr: false,
// });

const MobileSidebar = () => {
	//remove the hydration error
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<>
			<Sheet>
				<SheetTrigger>
					<Button variant="ghost" size="icon" className="md:hidden">
						<Menu />
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="p-0">
					<Sidebar />
				</SheetContent>
			</Sheet>
		</>
	);
};

export default MobileSidebar;
