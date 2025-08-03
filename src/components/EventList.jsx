import React from 'react';

const EventList = () => {
    const events = [
        { id: 1, title: 'Music Festival', date: '2023-09-15', location: 'Central Park' },
        { id: 2, title: 'Art Exhibition', date: '2023-10-05', location: 'City Gallery' },
        { id: 3, title: 'Tech Conference', date: '2023-11-20', location: 'Convention Center' },
    ];

    return (
        <div className="event-list">
            <h2>Upcoming Events</h2>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <h3>{event.title}</h3>
                        <p>Date: {event.date}</p>
                        <p>Location: {event.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;