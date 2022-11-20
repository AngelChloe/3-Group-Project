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

function SignupPage() {
  return (
    <ChakraProvider>
      <VStack spacing={7} paddingTop={5}>
        <Heading>Sign Up</Heading>
        <Editable defaultValue="Email">
          <EditablePreview />
          <EditableInput />
        </Editable>
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

export default SignupPage;
