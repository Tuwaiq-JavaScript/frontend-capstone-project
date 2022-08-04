import { useState } from "react";
import CreatePost from "./CreatePost";
import Story from "./Story";
import WritePost from "./WritePost";

export  function Post() {
    const [isHidden, setHidden] = useState(true)
     const showBox = ()  => {
        setHidden(false);
    }
    const closeBox = ()  => {
        setHidden(true);
    }
	return (
        <>
       <Story />
       <CreatePost togglePost={showBox} /> 
       {isHidden?null:<WritePost toggleClosePost={closeBox} />}
            
        </>
    );
}