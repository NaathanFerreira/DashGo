import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Nathan Ferreira</Text>
          <Text color="gray.300" fontSize="small">
            nathanferreira00@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Nathan Ferreira"
        src="https://github.com/NathanF10.png"
      />
    </Flex>
  );
}

export default Profile;
