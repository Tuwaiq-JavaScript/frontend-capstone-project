export function Login()
{
    return(
        <div id="container">
        <div id="square">
            <div id="logo_container">
                <img src="googlelogo.png" id="logo"/>
            </div>
            <div id="top_text">Sign in</div>
            <div id="top_subtext">to continue in google</div>
            <div id="input_container">
                <input type="text" name="" id="input"placeholder="Email or phone"/>
                <input type="text" name="" id="input" placeholder="password"/>

            </div>

            <div id="link1" className="link">Forgot email?</div>
            <div id="not">Not your computer? Use Guest mode to sign in privately.</div>
            <div id="link2" className="link">Learn more</div>
            <div id="last_split">
                <div className="btn_container">
                    <input type="button" value="Create account" id="btn_left"/>
                </div>
                <div id="btn2" className="btn_container">
                    <input type="button" value="Next" id="btn_right"/>
                </div>
            </div>
        </div>


        <div id="bottom_text">
            <div id="lang_container">
                <select name="lang" id="lang">
                    <option value="English(United States)">English(United States)</option>
                </select>
            </div>
            <div>Help</div>
            <div>Privacy</div>
            <div>Terms</div>

        </div>
    </div>
    )
}