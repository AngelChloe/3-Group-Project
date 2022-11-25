import {
  Stack,
  StackDivider,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ChakraProvider,
  Center,
  Text,
  Heading,
  VStack,
  Button,
  Input,
  HStack,
  SimpleGrid,
  Image,
  Badge,
  UseToast,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

function DashboardPage() {
  return (
    <ChakraProvider>
      <VStack spacing={7} paddingTop={5}>
        <Tabs isFitted variant="enclosed">
          <TabList>
            <Tab>Upcoming Trips</Tab>
            <Tab>Favorites</Tab>
            <Tab>Calendar</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>Upcoming Trips</p>
            </TabPanel>
            <TabPanel>
              <p>Favorites</p>
            </TabPanel>
            <TabPanel>
              <p>Calendar</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </ChakraProvider>
  );
}

export default DashboardPage;
