import { ReactElement } from 'react';
import { Navbar } from './Navbar';
interface LayoutProps {
	children: ReactElement;
}
export function Layout({ children }: LayoutProps) {
	return <>
	<Navbar/>
	{children}</>;
}
