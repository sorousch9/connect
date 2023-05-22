import "./Events.scss";
const dummyEvents = [
  {
    id: 1,
    title: "Tech Summit",
    date: "2023-09-22 - 2023-09-23",
    location: "Seattle Convention Center",
    description:
      "The Tech Summit is a two-day event that brings together the brightest minds in technology to discuss the latest trends and innovations in the industry.",
    attendees: [
      {
        name: "Sarah Lee",
        email: "sarahlee@example.com",
      },
      {
        name: "David Kim",
        email: "davidkim@example.com",
      },
      {
        name: "Michael Chen",
        email: "michaelchen@example.com",
      },
    ],
  },
  {
    id: 2,
    title: "Product Launch",
    date: "2023-07-10",
    location: "Company Headquarters",
    description:
      "Be the first to witness the unveiling of our latest product innovation.",
    attendees: [
      {
        name: "David Johnson",
        email: "davidjohnson@example.com",
      },
      {
        name: "Sarah Thompson",
        email: "sarahthompson@example.com",
      },
    ],
  },
  {
    id: 3,
    title: "Charity Gala",
    date: "2023-08-20",
    location: "City Ballroom",
    description:
      "Support a great cause at our annual charity gala with live performances and auctions.",
    attendees: [
      {
        name: "Michael Williams",
        email: "michaelwilliams@example.com",
      },
      {
        name: "Emily Davis",
        email: "emilydavis@example.com",
      },
    ],
  },
  {
    id: 4,
    title: "Annual Conference",
    date: "2023-06-15",
    location: "Grand Convention Center",
    description:
      "Join us for our annual conference featuring industry experts and networking opportunities.",
    attendees: [
      {
        name: "John Doe",
        email: "johndoe@example.com",
      },
      {
        name: "Jane Smith",
        email: "janesmith@example.com",
      },
    ],
  },
  {
    id: 5,
    title: "Startup Pitch Competition",
    date: "2024-03-05",
    location: "Microsoft Building 34",
    description:
      "Watch as some of the most promising startups pitch their ideas to a panel of judges for a chance to win funding and support.",
    attendees: [
      {
        name: "Alex Lee",
        email: "alexlee@example.com",
      },
      {
        name: "Jessica Kim",
        email: "jessicakim@example.com",
      },
      {
        name: "Brian Park",
        email: "brianpark@example.com",
      },
    ],
  },
  {
    id: 5,
    title: "Art Exhibition",
    date: "2024-08-01 -2024-08-31",
    location: "Seattle Art Museum",
    description:
      "Come see some of the most beautiful and thought-provoking works of art from around the world at our annual art exhibition.",
    attendees: [
      {
        name: "Daniel Lee",
        email: "daniellee@example.com",
      },
      {
        name: "Grace Kim",
        email: "gracekim@example.com",
      },
      {
        name: "Kevin Park",
        email: "kevinpark@example.com",
      },
    ],
  },
];

const Events = () => {
  return (
    <div className="event-row">
      {dummyEvents.map((event) => (
        <div key={event.id} className="event-card">
          <h3 className="event-title">{event.title}</h3>
          <p className="event-date">{event.date}</p>
          <p className="event-location">{event.location}</p>
          <p className="event-description">{event.description}</p>
          <div className="event-attendees">
            {event.attendees.map((attendee, index) => (
              <span key={index} className="attendee" title={attendee.email}>
                {attendee.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
