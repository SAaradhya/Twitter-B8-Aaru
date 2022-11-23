import './Home.css';
import LeftSec from '../../Component/Section-L/LeftSec';
// import CenterSec from '../../Component/Feed/Section-C/CenterFeed';
import RightSec from '../../Component/Section-R/RightSec';
import CenterFeed from '../../Component/Feed/Section-C/CenterFeed';

function Home() {
// return  "hello world ";

return (
    <div className='homeContainer'>

<div className='left-container'> <LeftSec/> </div>
<div className='center-container'> <CenterFeed/> </div>
<div className='right-container'> <RightSec/> </div>

</div>)


}

export default Home;