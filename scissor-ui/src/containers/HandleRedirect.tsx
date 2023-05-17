// import axios from 'axios';
// import {useEffect, useState} from 'react'
// import {useRouteMatch} from 'react-router-dom'
// import { Spinner, Box} from '@chakra-ui/react';

// const SERVER_ENDPOINTS = process.env.REACT_APP_SERVER_ENDPOINT || 'http://localhost:5000';

// const HandleRedirectContainer = () => {
//     const [destination, setDestination] = useState<null | string>(null);
//     const [error, setError] = useState();

//     const {
//         params: {shortId}, } = useRouteMatch<{shortId: string}>();

//         useEffect(() => {
//             async function getData(){
//                 return axios.get(`${SERVER_ENDPOINTS}/api/shortUrl/${shortId}`)
//                 .then((resp) => setDestination(resp.data.destination))
//                 .catch((error) => setError(error.message));
//             }
//             getData();
//         }, [shortId]);

//         useEffect(() => {
//             if (destination){
//                 window.location.replace(destination);
//             }
//         }, [destination]);

//         if(!destination && !error){
//             return (
//                 <Box
//                 height="100%"
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="center"
//                 >
//                     <Spinner />
//                 </Box>
//             )
//         }
//  return <p>{error && JSON.stringify(error)}</p>
// }

// export default HandleRedirectContainer;


// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { Spinner, Box } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';

// const SERVER_ENDPOINTS = process.env.REACT_APP_SERVER_ENDPOINT || 'http://localhost:5000';

// const HandleRedirectContainer = () => {
//   const [destination, setDestination] = useState<null | string>(null);
//   const [error, setError] = useState();

//   const shortId = useParams().shortId;

//   useEffect(() => {
//     async function getData() {
//       const {
//         match: { params: { shortId } },
//       } = useLocation();

//       return axios.get(`${SERVER_ENDPOINTS}/api/shortUrl/${shortId}`)
//         .then((resp) => setDestination(resp.data.destination))
//         .catch((error) => setError(error.message));
//     }
//     getData();
//   }, [shortId]);

//   useEffect(() => {
//     if (destination) {
//       useNavigate(destination);
//     }
//   }, [destination]);

//   if (!destination && !error) {
//     return (
//       <Box
//         height="100%"
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Spinner />
//       </Box>
//     );
//   }

//   return <p>{error && JSON.stringify(error)}</p>;
// };

// export default HandleRedirectContainer;



import axios from 'axios';
import { useEffect, useState } from 'react';
import { useMatch } from 'react-router-dom';
import { Spinner, Box } from '@chakra-ui/react';

const SERVER_ENDPOINTS = process.env.REACT_APP_SERVER_ENDPOINT || 'http://localhost:5000';

const HandleRedirectContainer = () => {
  const [destination, setDestination] = useState<string | null>(null);
  const [error, setError] = useState<string | undefined>();

  const match = useMatch('/:shortId');
  const shortId = match?.params.shortId;

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`${SERVER_ENDPOINTS}/api/shortUrl/${shortId}`);
        setDestination(response.data.destination);
      } catch (error: unknown) {
        setError(error as string);
      }
    }

    if (shortId) {
      getData();
    }
  }, [shortId]);

  useEffect(() => {
    if (destination) {
      window.location.replace(destination);
    }
  }, [destination]);

  if (!destination && !error) {
    return (
      <Box height="100v%" display="flex" alignItems="center" justifyContent="center">
        <Spinner />
      </Box>
    );
  }

  return <p>{error && JSON.stringify(error)}</p>;
};

export default HandleRedirectContainer;
