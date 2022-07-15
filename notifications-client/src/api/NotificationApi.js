const NOTIFICATION_URL = `http://localhost:8080/api/notifications`

export const fetchNotifications = async () => {
  try {
    const response = await fetch(`${NOTIFICATION_URL}`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        }
      });
    const data = await response.json()
    return data;
  } catch (err) {
    console.warn(err)
  }
}

export const toggleNotifications = async (id, currentValue) => {
  try {
    console.log(currentValue)
    const response = await fetch(`${NOTIFICATION_URL}/${id}`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify({
          read: currentValue,
        })
      });

    const data = await response.json()
    return data;
  } catch (err) {
    console.warn(err)
  }
}
