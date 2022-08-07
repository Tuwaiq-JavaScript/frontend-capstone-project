import '../../styles/network.css';
import { INetwork } from '../../data/network/network';
interface NetworkProps {
	network: INetwork;
}

export function Network({ network }: NetworkProps) {
	return (
		<>
	


    <div className="card-row-net">
       <span className="card-net">
      <img src={network.imgUrl} />
      <div>{network.name}</div>
	  <div>{network.title}</div>
    <div>{network.job}</div>
	<div><button id='follow-button'>{network.flow}</button></div>
	   </span>
 
  </div>
</>
	)
}
