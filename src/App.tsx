import {
  Box,
  Button,
  chakra,
  Flex,
  FormControl,
  Heading,
  Input,
  Link,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { FormEvent, useState } from "react";

const Form = chakra("form");

const App = () => {
  const [value, setValue] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.post("https://viaxco-shorten.onrender.com/api", {
        longUrl: value,
      });
      const { shortUrl } = res.data;
      setShortUrl(shortUrl);
      setIsLoading(false);
    } catch (error) {
      toast({
        title: error.response.data,
        status: "error",
        duration: 2500,
        isClosable: true,
        position: "top",
      });
      setIsLoading(false);
    }
  };

  return (
    <Flex
      direction="column"
      minH="100vh"
      align="center"
      justify="center"
      py="12"
      px="4"
      bg="#333"
      color="white"
      textAlign="center"
    >
      <Box maxW="540px" w="100%">
        <Heading as="h1" color="white" mb="8">
          URL Shortener
        </Heading>
        <Form
          display="flex"
          flexDirection={["column", "row"]}
          onSubmit={handleSubmit}
          mb="10"
        >
          <FormControl mr={[null, "5"]} mb={["5", null]}>
            <Input
              placeholder="Please input valid url to shorten"
              value={value}
              onChange={e => setValue(e.target.value)}
              required
            />
          </FormControl>
          <Button type="submit" color="#333" isLoading={isLoading}>
            Submit
          </Button>
        </Form>
        {shortUrl && (
          <Box bg="white" color="#333" p="4" rounded="md" w="90%" m="auto">
            <Link href={shortUrl} target="_blank">
              {shortUrl}
            </Link>
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default App;
