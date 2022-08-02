export function Welcome(){
    return(
        <>
        <div className="main_welcome">
            <div className='main_welcome_1'>
            <div className='continer1'>
                <h1>Welcome to Facebook</h1>
            </div>
            <div className="continer2">
                <div className='continer2_1'>
                <h1>Upload a profile picture</h1>
                <p className='description'>Add a photo so that friends can easily identify you.</p>
                <button id="Add_picture_welcome">Add Picture</button>
                </div>
                <div className='continer2_2'>
                    <img  id='img_account' src="img_welcome.jpeg" alt="" />
                </div>
            </div>
            </div>
            <div className='main_welcome_2'>
            <div className='continer3'>
         
            <div className="continer4">
                <div className='continer2_3'>
                <h1>Get to know your privacy settings</h1>
                <p className='description2'>You control how you share your stuff with people and apps on Facebook.</p>
                <button id="take_privacy">Take a Privacy Tour</button>
                </div>
                </div>

            </div>
            </div>
        </div>
        </>
    )
}