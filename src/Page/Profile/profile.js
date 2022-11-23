import './profile.css';
import LeftSec from '../../Component/Section-L/LeftSec';
import RightSec from '../../Component/Section-R/RightSec';
import IndividualProfile from '../../Component/IndividualProfile/MyProfile';
import NewTweetBtn from '../../Component/newTweetBtn/NewTweetBtn';


function profile() {
// return  "hello world ";

return (
    <div className='homeContainer'>

<div className='left-container'> <LeftSec/> <NewTweetBtn/> </div>
<div className='center-container'> <IndividualProfile/>  </div>
<div className='right-container'> <RightSec/> </div>

</div>)


}

export default profile;