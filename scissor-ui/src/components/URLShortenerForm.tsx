import { useState } from 'react';
import { Button, Input, Box, Heading, InputGroup } from '@chakra-ui/react';
import axios from 'axios';
import { SERVER_ENDPOINTS } from '../config/index';

const URLShortenerForm = () => {
	const [destination, setDestination] = useState();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const result = await axios
			.post(`${SERVER_ENDPOINTS}/api/shortUrl`, { destination })
			.then((resp) => resp.data)
		    .catch((err: any) => console.log(err));

		debugger;
        console.log(result)
	};
	return (
		<Box pos="relative">
			<form onSubmit={handleSubmit}>
				<Input
					onChange={(e: any) => setDestination(e.target.value)}
					placeholder="https://example.com"
				/>
				<Button type="submit">CREATE SHORT URL</Button>
			</form>
		</Box>
	);
};

export default URLShortenerForm;
