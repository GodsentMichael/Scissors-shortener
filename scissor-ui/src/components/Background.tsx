
import {useState, useEffect} from 'react';
// eslint-disable-next-line
import {Image } from '@chakra-ui/react'

// To create a function that gets the height and width from the browser window.
const getWindowDimensions = () => {
    const {innerWidth: width, innerHeight: height} = window;
    return {width, height};
}

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

     return windowDimensions;
}

// To create a background image that fits the browser window.
const Background = () =>{
    const {width, height} = useWindowDimensions();

// eslint-disable-next-line
    const img = `https://source.unsplash.com/random/${width}x${height}`;
    
    return <div>
      <Image position="fixed" top="0" left="0" zIndex="1" src={img} alt="bg" />
    </div>
}

export default Background