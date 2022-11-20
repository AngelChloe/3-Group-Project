import { Link } from "react-router-dom";
import {
  Center,
  VStack,
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  ChakraProvider,
} from "@chakra-ui/react";

// import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <ChakraProvider>
      <Center bg="black" color="white" padding={8}>
        <VStack spacing={7}>
          <Tabs variant="soft-rounded" colorScheme="red">
            <Center>
              <TabList>
                <Tab>
                    <Link to="/">Dashboard</Link>
                </Tab>
                <Tab>
                <Link to="/aboutus">About Us</Link>
                </Tab>
                <Tab>
                <Link to="/destinations">Destinations</Link>
                </Tab>
                <Tab>
                <Link to="/pasttrips">Past Trips</Link>
                </Tab>
                <Tab>
                <Link to="/login">Log In</Link>
                </Tab>
                <Tab>
                  <Link to="/signup">Sign Up</Link>
                </Tab>
              </TabList>
            </Center>
          </Tabs>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}

export default MainNavigation;

{
  /* <header>
<nav>
  <ul>
    <li>
      <Link to="/">Dashboard</Link>
    </li>
    <li>
    <Link to="/aboutus">About Us</Link>
    </li>
    <li>
    <Link to="/destinations">Destinations</Link>
    </li>
    <li>
    <Link to="/pasttrips">Past Trips</Link>
    </li>
  </ul>
  
</nav>
</header> */
}
