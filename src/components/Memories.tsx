import React from 'react'
import {BsFillPeopleFill} from 'react-icons/bs'
import {MdNotificationsActive} from 'react-icons/md'
import {IoIosHome} from 'react-icons/io'
import {BsCalendarDateFill} from 'react-icons/bs'
export default function Memories() {
  return (
    <div>
      <div className='flex-memories-main'>
          <div className='first-row-element'>
              <div>
                  <div>
                  <p>Memories</p>
                  </div>
                  <div className='memories-home'>
                      <IoIosHome size={30}/> Memories Home
                  </div>
                  <div className='line-memories'></div>
                  <div>
                      <h3>Settings</h3>
                  </div>
                  <div className='memories-notification'>
                      <MdNotificationsActive size={30}/> Notifications
                  </div>
                  <div className='memories-notification'>
                      <BsFillPeopleFill size={30}/> Hide people
                  </div>
                  <div className='memories-notification'>
                      <BsCalendarDateFill size={30}/> Hide dates
                  </div>
          </div>       
          </div>
          <div className='second-row-element'>
              <div>
                  <img src="https://www.facebook.com/images/goodwill/throwback/permalink/tetra/tetra_home_header-2x.png" alt="" />
              </div>
              <div className='memories-second-text'>
                  <p>
                  No Memories Today
                  </p>
                  <h4>There aren't any Memories to see or share today, but we'll let you know when you have some to look back on.</h4>
              </div>
          </div>
      </div>
    </div>
  )
}
