import {
  Center, Text, Heading, VStack, Button, Input, HStack, SimpleGrid, Image, Badge, UseToast, ChakraProvider,
} from "@chakra-ui/react"

function PastTripsPage() {
    return (
      <ChakraProvider>
 <VStack spacing={7} paddingTop={5}>
  <Heading size='xl' >Past Trips</Heading>
  <Text>Tell us about your vacations!</Text>
 </VStack>
 </ChakraProvider>
    );
  }
  
  export default PastTripsPage;
  
//   <section>
//   <h1>Past Tips</h1>
//   <ul>
//   <div>
//     <div>Past Trips</div>
//   </div>
//   <div>
//     <div>Images</div>
//     <div>Location</div>
//     <div>Description</div>
//   </div>
//   </ul>
// </section>