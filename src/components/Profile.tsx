import { IoMdSettings } from "react-icons/io";
import { BsCameraVideo, BsFilterLeft, BsPersonCircle } from "react-icons/bs";
import CreatePost from "./post/CreatePost";

export default function Profile() {
	return ( 
        <div>
            <div>
                <div className="profile-cover-page">
                    <div className="profile-cover-image">
                        <div className="add-cover-image">
                            <button >Add cover image</button>
                        </div>
                    </div>
                    <div className="profile-acc-image">
                        <img className="profile-acc-img-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABdCAMAAADwr5rxAAAANlBMVEXb2dutrK3////e3N6qqarY1tjt7O3x8PG1tLXk4+T7+/vHxsf29fbn5ufU0tTFw8XNy828u7zkK5mXAAADh0lEQVRoga2aiY6uIAxG8bIo6u/y/i97cVdov6JMk0kmEz12SildUP/ypG372m1S922b+ZbKeKZ3Xitrrdpk+U171/8Fvfbq5N4l/NHXZfTak+TrC8IHEN0phN4/oNwnuoNq3/8Bns/R6wy9L/05+9D0VuezV76mfZSku3fslU+ah6C/VRyon9LrL+yVn1o/oX+wyolPrBPTf9/hAf/DdF8CD3iP6EWaE9qrP4XH+Du9YEFveEfTP7tihK8peiu/qINk8FuCLr2n7TTO89gNSnwypQsrqqemMqYKP6aaB8y/Vvag9xCuhyaQDzFmxsrbPqJDbfR4Y6/8Cquvn3ToL3qO4At/QvjDb3Y6VISAB/yA3lF3OtxHEwUPguD7ntrocElpdmVGaJuLjlRPVvTCw1THnXSkuWbYkvLqoEOHGTjVg4hus9A9Up01jGAa5Xc69nVedTMhut3oeCc1gN5JplHYMAX0xTQKe0wJfUFL0fE7PURKJZymJXQX6NDsRZbxgY6fKKHrf0o4rEvogd0K52kB3bYKu0wZvVdCjgTpMBIsu1U5/ASMM/jwU4Et0TsQIwW4TFeWpzdSUibTecNLZs+hsykBTgpy6ZzyOF/KpTOWN6LVF7pcE2jSNhnw4O/CXmXwpskoVMJeFeLMhh9i+JxTg4Q4Ixc0Sz3zXNoQYLKKnFaI73qtZ5om8pvwh1DkTEKNo/HZpO24ljKMSxrTdOgDHp2r2s4s+fxCxSeT67nKOQ3K8R58bletOQGTz9gmC16BXJjPxWwmesXT/unZPPINnMHveSSRA6PzLtc4lsvf6SoP4tND0HO1Bx/SeYmVP2uPZLu+ZxO24Wq+L6rHJ9Wt5nuu69sl3ZXvkjUla22QBSB5HCePWvu+XzMjQKp8YnWqx/HNMM8EJOpx3N3mG/zhNVF/5hYp3wWBm1zhIOktXX0xVLpDOZc17YtdtimnEz29sx9ZTqf6kYfflNLpXuqxpwrpXB94X9kyOt/D3vBFdNR/X/El9Hg0kc49CujS3CMs7Xd6OlBM503uI9006TyXmJV5Mb+j4VmzshDRXqcES1JAgJgZpX2pvmnoGSgzX+3HF3xTaZrCz4adnF7vbDOwFwDAXPuXwQ9P8GxhJl9PFfyACekpel+8T+A7Q9c2S12jpBsLGXchnB0bE0k1dz7jMkTOTYsgfe3tMHXjOHbToH995kWO/0ThK6fzysjnAAAAAElFTkSuQmCC" alt="" />
                        <p>Yazeed Alhanaki</p>
                        <button className="add-story-button">+ Add to story</button>
                        <button className="edit-profile-btn">Edit profile</button>
                    </div>
                </div>
                </div>
            <div className="flex-row-lower">
                <div className="first-column-lower">
                    <div className="intro-profile">
                        <p>Intro</p>
                        <button>Add bio</button>
                        <button>Edit details</button>
                        <button>Add hobbies</button>
                        <button>Add featured</button>
                    </div>
                    <div className="add-photos-flex-row">
                        <p>Photos</p>
                        <h4>see all photos</h4>
                    </div>
                    <div className="add-photos-flex-row">
                        <p>Friends</p>
                        <h4>see all friends</h4>
                    </div>
                </div>
                <div className="flex-column-second">
                    <div className="fix-space">
                    <div>
                    <CreatePost togglePost={function (): void {
                                throw new Error("Function not implemented.");
                            } }  />
                    </div>
                    </div>
                    
                    <div className="posts-profile-page">
                        <div className="post-settings-row">
                            <div>
                                <p>Posts</p>
                            </div>
                            <div>
                               <button className="manage-filter-btns"> <BsFilterLeft/> Filter</button>
                               <button className="manage-filter-btns"> <IoMdSettings/> Manage posts</button>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>

        </div>
    )}