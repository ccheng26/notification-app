# notification-app

## Frontend
In the frontend directory `notifications-client`, you can run:

#### `npm start`

Runs the app in the frontend.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Backend
In the backend directory `notifications-server`, you can run:

### `npm start`

Runs the app in the backend.\
Make requests to [http://localhost:8080/api/notifications](http://localhost:8080/api/notifications) to modify the data;

`http://localhost:8080/api/notifications`
Supports crud operations

```
GET http://localhost:8080/api/notifications

POST http://localhost:8080/api/notifications

Payload 
{
    title: string,
    description: string,
    read: boolean
}
```

On initialization entries will be populated for notifications.