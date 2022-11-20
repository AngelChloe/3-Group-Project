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

function LoginPage() {
  return (
    <ChakraProvider>
      <VStack spacing={7} paddingTop={5}>
        <Heading>Log In</Heading>
        <Editable defaultValue="Username">
          <EditablePreview />
          <EditableInput />
        </Editable>
        <Editable defaultValue="Password">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </VStack>
    </ChakraProvider>
  );
}

export default LoginPage;
