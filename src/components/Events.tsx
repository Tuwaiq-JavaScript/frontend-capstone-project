import { BsCalendarDateFill, BsFillPeopleFill } from "react-icons/bs";
import { FaBirthdayCake, FaUserAlt } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";


export default function Events() {
	return (
        <div>
            <div>
      <div className='flex-events-main'>
          <div className='first-row-element'>
              <div>
                  <div>
                  <p>Events</p>
                  </div>
                  <div className='memories-home'>
                      <IoIosHome className="icon-background-events2"  size={30}/> Events Home
                  </div>
                  
                  
                  <div className='events-notification'>
                      <FaUserAlt className="icon-background-events" size={30}/> Your events
                  </div>
                  <div className='events-notification'>
                  <FaBirthdayCake className="icon-background-events" size={30}/> Birthdays
                  </div>
                  <div className='events-notification'>
                      <BsCalendarDateFill className="icon-background-events" size={30}/> Hide dates
                  </div>
          </div>       
          </div>
          <div className='second-row-element-events'>
              <div className="events-calendar">
                  <div>
                      <p>Discover events</p>
                  </div>
                  <div className="flex-months">
                      <div>
                          <h4 className="flex-month-background"> Top</h4>
                      </div>
                      <div>
                          <h4 className="flex-month-background"> Local</h4>
                      </div>
                      <div>
                          <h4 className="flex-month-background"> This week</h4>
                      </div>
                      <div>
                          <h4 className="flex-month-background"> Classes</h4>
                      </div>
                      <div>
                          <h4 className="flex-month-background"> Friends</h4>
                      </div>
                      <div>
                          <h4 className="flex-month-background"> Online</h4>
                      </div>
                      <div>
                          <h4 className="flex-month-background"> Following</h4>
                      </div>
                  </div>
                  <div className="calendar-img-flex">
                      <img className="calender-img-events" src="https://www.facebook.com/images/youth/birthday/Education_Calendar_A_4x.png" alt="" />
                      <h5 className="calendar-img-flex-h4">No events found.</h5>
                  </div>
              </div>
          </div>
      </div>
    </div>
        </div>
    )}