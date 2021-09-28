import Bus from "../pages/Bus/Bus";
import Flight from "./../pages/Flight/Flight";
import Room from "./../pages/Room/Room";
export interface routeType {
  slug: string;
  label: string;
  route: string;
  component: React.ReactElement;
}

const FlightRoute: routeType[] = [
  {
    slug: "flight",
    label: "Flight",
    route: "/flight",
    component: <Flight />,
  },
];
const BusRoute = [
  {
    slug: "bus",
    label: "Bus",
    route: "/buses",
    component: <Bus />,
  },
];
const RoomRoute = [
  {
    slug: "room",
    label: "Room",
    route: "/rooms",
    component: <Room />,
  },
];

const Path = [FlightRoute, BusRoute, RoomRoute];

export default Path;
