import { Box, Link, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

type MenuItem = {
  label: string;
  href: string;
};

const menu: MenuItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <Box
      as="nav"
      aria-label="Main navigation"
      pos="fixed"
      left="0"
      top="0"
      h="100vh"
      w="280px"
      bg="gray.50"
      boxShadow="md"
      py="6"
      px="4"
    >
      <Stack spacing="4">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            display="flex"
            alignItems="center"
            fontSize="lg"
            fontWeight="medium"
            color={router.pathname === item.href ? 'teal.500' : 'gray.800'}
            _hover={{ color: 'teal.500' }}
          >
            <Text>{item.label}</Text>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default Sidebar;
