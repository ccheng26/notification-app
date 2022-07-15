import React from "react";
import Notification from "./Notification"
export const NotificationList = ({ data }) => {
	return data.map((notification) => {
		return <Notification key={notification.id} notificationData={notification}
		/>
	})
}
export default NotificationList;