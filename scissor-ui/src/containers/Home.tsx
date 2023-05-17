import { Box } from '@chakra-ui/react';
import URLShortenerForm from '../components/URLShortenerForm';
import Background from '../components/Background';

const Home = () => {
	return (
		<Box
			height="100%"
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			<URLShortenerForm />
			<Background />
		</Box>
	);
};

export default Home;
