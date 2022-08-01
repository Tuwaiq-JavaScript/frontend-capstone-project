import React from 'react'
import {AiFillSetting} from 'react-icons/ai'
import {CgInpicture} from 'react-icons/cg'
import {RiListSettingsFill} from 'react-icons/ri'

export default function Saved() {
  return (
    <div>
        {/* <!-- Side navigation --> */}
<div className="sidenav-saved">
  <div className='side-nav-content-saved'>
      <div className='first-row-side-bar'>
          <p>Saved</p>
          <AiFillSetting size={30} />
      </div>
      <div className='second-row-side-bar'>
          <CgInpicture size={30}/> Saved items
      </div>
      <div className="line-saved"></div>
      <div className='collections-saved'>My Collections</div>
      <div>
          <button> + Create New Collection</button>
      </div>

  </div>
</div>

{/* <!-- Page content --> */}
<div className="main-saved">
  <div className='saved-saved'>
      All <RiListSettingsFill size={30}/>
  </div>
  <div className='no-saved-items'>
  You do not have any saved items.
  </div>
</div>
    </div>
  )
}
