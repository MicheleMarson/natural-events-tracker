import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const LocationMarker = ({ lat, lng, onClick }) => {
	return (
		<div className="marker" onClick={onClick}>
			<Icon icon={locationIcon} class="location-icon"></Icon>
		</div>
	);
};

export default LocationMarker;
