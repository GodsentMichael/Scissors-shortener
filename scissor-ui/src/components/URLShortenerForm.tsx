import { useState } from 'react';
// eslint-disable-next-line
import { Button, Input, Box, Heading, InputGroup  } from '@chakra-ui/react';
import axios from 'axios';
import "../index.css"; // Import the index.css file
import { SERVER_ENDPOINTS } from '../config/index';

const URLShortenerForm = () => {
	const [destination, setDestination] = useState();
	const [shortUrl, setShortUrl] = useState<{
		shortId: String;
	} | null>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setShortUrl(null);

		const result = await axios
			.post(`${SERVER_ENDPOINTS}/api/shortUrl`, { destination })
			.then((resp) => resp.data);

		setShortUrl(result);
	};
	return (
		<Box
			pos="relative"
			zIndex="2"
			justifyContent="center"
			alignItems="center"
			backgroundColor="white"
			padding="6"
		>
			
			<form onSubmit={handleSubmit}>
				<InputGroup>
					<Input
						onChange={(e: any) => setDestination(e.target.value)}
						placeholder="https://example.com"
					/>
					<Button type="submit">CREATE URL</Button>
				</InputGroup>
			</form>
		
{/* 
			{shortUrl && (
				<a href={`${SERVER_ENDPOINTS}/api/shortUrl/${shortUrl?.shortId}`}>
					CLICK ME {SERVER_ENDPOINTS}/{shortUrl?.shortId}
				</a> */}

			{shortUrl && (
				<a href={`/${shortUrl?.shortId}`}>
					{window.location.origin}/{shortUrl?.shortId}
				</a>
			)}
		</Box>
	);
};

export default URLShortenerForm;
