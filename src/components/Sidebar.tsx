import { BsPersonCircle } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
export default function Sidebar() {
  return (
    <div className="sidebar">
		<div className="sidebar-row">
			<BsPersonCircle className="sidebar-icon" size={30} />
			<h3>Omar Alwahiby</h3>
		</div>
		<div className="sidebar-row">
			<img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" alt="" />
			<h3>Find friends</h3>
		</div>
		<div className="sidebar-row">
			<img src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/k0tRiO8UGxF.png" alt="" />
			<h3>Welcome</h3>
		</div>
		<div className="sidebar-row">
			<img src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/9s7nhm949yb.png" alt="" />
			<h3>Community Help</h3>
		</div>
		<div className="sidebar-row">
			<img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png" alt="" />
			<h3>Saved</h3>
		</div>
		<div className="sidebar-row">
			<img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png" alt="" />
			<h3>Memories</h3>
		</div>
		<div className="sidebar-row">

		</div>
		<div className="sidebar-row">
			<img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/qfMB40PdgWb.png" alt="" />
			<h3>Events</h3>
		</div>
		<div className="sidebar-row">
			<img src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png" alt="" />
			<h3>Most Recent</h3>
		</div>
		<div className="sidebar-row">
			<img src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png" alt="" />
			<h3>COVID-19 Information Center</h3>
		</div>
		<div className="sidebar-row">
			<RiArrowDownSLine />
			<h3>See More</h3>
		</div>
	</div>
  )
}
