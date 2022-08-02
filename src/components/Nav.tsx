import { FaHome, FaLinkedin, FaSearch, FaShoppingBag, FaUserFriends } from 'react-icons/fa';
import { BsFillPersonFill, BsFillChatLeftDotsFill, BsFillBellFill } from 'react-icons/bs';

export function Nav() {
	return (
		<>
			<div className='header'>
				<div className='header__left'>
					<img
						src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUCZ5r///8AXZQAX5XC0d6lvdAAVpGGp8IAY5gAW5MAWZLc5Oz09/lgj7IAZZkAWJJ5or/T4eqUtczg6vFRirDG1+M/fKaJqcMxeaVnmLiju8+vx9gLa51Fg6thk7XA1OEfcaG1zNzo8PVxnrwrRTZEAAADcklEQVR4nO3cbXeaMBiAYUlqDUij4Lviqu7//8fp0LVKHmsHTdqc+/o63OE+2EAg2OsBAAAAAAAAAAAAAAAAAAAAAAAAn2SNPjKhd+OrWJUtV+W6HL/0shgjbTrf5MnZZKF16B3qmq5myXv5eGRD71On1DS5NUtD71SX9K9GYJIUKp6jaLaOwONRHIXesa5YlTsLk3Esw40u3YFJHslJw2rhECbJII6DaFzDzHmwiWM81X2xMImjMJ3JhcsoThjpUC6cRjHWpIVc+BJFoXqN/Vt6b6TRURSalRg4yULvXDcqsbAfxxm/l4p/iMsoBprjZdtcCIxnipju3YW7KMaZv4zz2juaydOR3TkSy2i+oyemN7kNHERypriw6noaXMxV6F3qmtVmcbkEz/fTyO4lnpm02q4Gi9VOqUjOgw6nBxcmysMHAD+L0So9Udp8m5OOUW7/8V/pzE4Xm1kxHBb7/mJaZd/iPogpn5xm14lWu70lWGUHNzfuDv1tGn6Kop6EGfDz+63stO82vySmO+c881Da0Ne4jxXqhbDV+Z6quXPPbh14fceDhYO7hWorPsE6yl+ykH+PXRRm0r9e7EM+M++g8PnOXeWziQ2X2L5w9HHg8ZtaBUtsXZhJj8mvHYIdxbaF2e+HApOkCLW4o22hdEO5qR/o9l3bwnuniRuBnri2LDw8HpgcwtyibFn4KYsgF6k+C8MsQvJZGOYgei0M8pfotTDIcOq3cB9gsthZYbEpB4PytfEY60r+cwvXVaZOdzXUaLm5t93c/9VpJ4Wz3tsE0Kb3psOl/9G0i8Ly+nGcqeQrnQDrHzooXN/OGsxO3Db3f75oX+iYFil588pb2b+daVuYux45puL3dOt9qGld6FyWIt59TFbez/ltCyfuqbuWtvc/mLYt/OU+Jpm0Mtf/esCWhYUwNuq18IGN96ualoXSfEhct/r60wqlgeMbLXns5LmFg7Qy1/97Kl9UaN0rHpNkGEthT3olLp7CjEJvKKxR2EShPxTWKGyi0B8KaxQ2UegPhTUKmyj0h8IahU0U+kNhjcImCv2hsEZhE4X+UFijsIlCfyisUdhEoT/dvMvdJBVOvBeasftF+83VgrWP38e/pdfuDwR4McgIv5ZwvdXHv6lwS/hA+N9YAAAAAAAAAAAAAAAAAAAAAAAAwA/xB7fDQCjkp1xMAAAAAElFTkSuQmCC'
						alt=''
					/>
					<div className='header__search'>
						<i className='material-icons'> search </i>
						<input type='text' />
					</div>
				</div>

				<div className='header__right'>
					<div className='headerOption'>
						<FaHome />
						<h3>Home</h3>
					</div>
					<div className='headerOption'>
						<FaUserFriends />
						<h3>My Network</h3>
					</div>
					<div className='headerOption'>
						<FaShoppingBag />
						<h3>Jobs</h3>
					</div>
					<div className='headerOption'>
						<BsFillChatLeftDotsFill />
						<h3>Messaging</h3>
					</div>
					<div className='headerOption'>
						<BsFillBellFill />
						<h3>Notifications</h3>
					</div>
					<div className='headerOption'>
						<BsFillPersonFill />
						<h3>Me</h3>
					</div>
				</div>
			</div>
		</>
	);
}
