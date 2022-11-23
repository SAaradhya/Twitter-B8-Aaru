
import './Trending.css';

function Trending(props)
{
return(
<div className="TrendingData">
<p className="smallHeader">{props.data.header}</p>
<p className="Header">{props.data.text}</p>
<p className="smallHeader">{props.data.tweetCount}</p>

</div>
)

}

export default Trending;