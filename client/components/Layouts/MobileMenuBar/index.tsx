import Image from 'next/image';
import React, { useRef } from 'react'
import useOpenMobileMenu from '../../../Hooks/useOpenMobileMenu';
import { MenuBarHeader, MobileMenuBarWrapper, MobileOverLay } from './styles';

interface Props {
	open: boolean;
	onClose: () => void;
}

const MobileMenuBar = ({ open, onClose }: Props) => {
	const menubarRef = useRef<HTMLDivElement>(null);
	useOpenMobileMenu(open, menubarRef);
	return (
		<>
			{open && <MobileOverLay onClick={onClose} />}
			<MobileMenuBarWrapper ref={menubarRef}>
				<MenuBarHeader onClick={onClose}>
					<Image src="/closeMenuBar.png" alt=">" width={8} height={13} />
				</MenuBarHeader>
			</MobileMenuBarWrapper>
		</>
	)
}

export default MobileMenuBar