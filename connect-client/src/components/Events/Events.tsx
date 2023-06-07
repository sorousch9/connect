import { Col } from "antd";
import "./Events.scss";
import { HiMapPin } from "react-icons/hi2";
import { BsCalendarWeek } from "react-icons/bs";
import Slider from "react-slick";
import { axiosRequest } from "../../hooks/axios";
import { useQuery } from "@tanstack/react-query";
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
        name: "Shima Loren",
        email: "Shima@example.com",
        photo:
          "https://images.pexels.com/photos/8199174/pexels-photo-8199174.jpeg?auto=compress&cs=tinysrgb&w=400",
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
        photo:
          "https://images.pexels.com/photos/804009/pexels-photo-804009.jpeg?auto=compress&cs=tinysrgb&w=400",
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
        photo:
          "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=400",
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
        name: "Amir Wloa",
        email: "jsas@example.com",
        photo:
          "https://images.pexels.com/photos/1546912/pexels-photo-1546912.jpeg?auto=compress&cs=tinysrgb&w=400",
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
        name: "Alex Sirea",
        email: "alexs@example.com",
        photo:
          "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=400",
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
        name: "joen Lee",
        email: "janiesaa@example.com",
        photo:
          "https://images.pexels.com/photos/2537658/pexels-photo-2537658.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
    ],
  },
];

const Events = () => {
  const { isLoading, error, data } = useQuery(["stories"], () =>
    axiosRequest.get("/stories").then((res) => {
      return res.data;
    })
  );
  console.log(data);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="event-row">
      <Slider {...settings}>
        {dummyEvents.map((event) => (
          <Col md={23} key={event.id} className="event-card">
            <h3 className="event-title">{event.title}</h3>
            <p className="event-date">
              <BsCalendarWeek />
              {event.date}
            </p>
            <p className="event-location">
              <HiMapPin />
              {event.location}
            </p>
            <div className="event-description-wrapper">
              <p className="event-description">{event.description}</p>
            </div>
            <div className="event-attendees">
              {event.attendees.map((attendee, index) => (
                <div key={index} className="attendee">
                  <img
                    src={attendee.photo}
                    alt="profile"
                    className="attendeeImg"
                  />
                  <span className="attendeeName" title={attendee.email}>
                    {attendee.name}
                  </span>
                </div>
              ))}
            </div>
          </Col>
        ))}
      </Slider>
    </div>
  );
};

export default Events;
