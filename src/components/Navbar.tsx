import React from "react";
import NavigationBar from "@kiwicom/orbit-components/lib/NavigationBar";
import LinkList from "@kiwicom/orbit-components/lib/LinkList";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import { NavLink } from "react-router-dom";
interface Props {
  config: any;
}

const Navbar = ({ config }: Props) => {
  //   console.log(config);
  return (
    <div className="navbar">
      {config && (
        <NavigationBar>
          <Stack direction="row" align="center">
            <ButtonLink href="/">
              <img
                src={
                  require(`../assets/images/logo${config?.appId}.png`).default
                }
                alt="Paul Travels"
                height="40px"
              />
            </ButtonLink>
            <Stack>
              <LinkList direction="row">
                <TextLink type="secondary">
                  <NavLink to="/flight" activeClassName="text-dark">
                    Flights
                  </NavLink>
                </TextLink>
                <TextLink type="secondary">
                  <NavLink to="/buses" activeClassName="text-dark">
                    Buses
                  </NavLink>
                </TextLink>
                <TextLink type="primary">
                  <NavLink to="/rooms" activeClassName="text-dark">
                    Rooms
                  </NavLink>
                </TextLink>
              </LinkList>
            </Stack>
          </Stack>
        </NavigationBar>
        // <div className="navbar-logo">
        //   <img
        //     src={require(`../assets/images/logo${config?.appId}.png`).default}
        //     alt=""
        //     width={200}
        //   />
        // </div>
      )}
    </div>
  );
};

export default Navbar;
