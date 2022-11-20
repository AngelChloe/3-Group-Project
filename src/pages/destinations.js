import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
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
  ChakraProvider,
} from "@chakra-ui/react";

function DestinationPage() {
  return (
    <ChakraProvider>
<VStack spacing={7} paddingTop={5}>
<Heading size='xl' >Destinations</Heading>
<Text>Where do you want to go?</Text>
</VStack>
</ChakraProvider>
  );
}
export default DestinationPage