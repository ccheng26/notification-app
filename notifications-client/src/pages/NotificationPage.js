import React, { useEffect, useState } from "react"
import { fetchNotifications } from "../api/NotificationApi"
import NotificationList from "../components/NotificationList"

export const NotificationPage = () => {
    const [notifications, setNotifications] = useState([])
    useEffect(() => {
        async function getNotifications() {
            const data = await fetchNotifications();
            setNotifications(data)
        }
        getNotifications()
    }, [])

    return <NotificationList data={notifications} />
}
export default NotificationPage;