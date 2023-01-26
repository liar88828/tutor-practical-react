import {FaAccessibleIcon} from "react-icons/fa";
import {MdAlarm} from "react-icons/md";
import {IconContext} from "react-icons";

function Icon() {

	return (
			<IconContext.Provider value={{color: 'red', size: '5rem'}}>
				<div className="Icon">
					<FaAccessibleIcon color={'purple'} size="10rem"/>
					<MdAlarm/>
				</div>
			</IconContext.Provider>
	)
}

export default Icon