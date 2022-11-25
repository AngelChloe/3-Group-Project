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
} from "@chakra-ui/react";

function AboutUsPage() {
  return (
    <ChakraProvider>
      <VStack spacing={7} paddingTop={5}>
        <Card>
          <CardHeader>
            <Heading size="md">About Us!</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Our Top 5
                </Heading>
                <Text pt="2" fontSize="sm">
                  Our top 5 places!
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Cindy
                </Heading>
                <Text pt="2" fontSize="sm">
                  Cindy's Experience and fav
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Luna
                </Heading>
                <Text pt="2" fontSize="sm">
                  Luna's Experience and fav
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Morgan
                </Heading>
                <Text pt="2" fontSize="sm">
                  Morgan's Experience and fav
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </VStack>
    </ChakraProvider>
  );
}

export default AboutUsPage;
