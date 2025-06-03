import animationData from '../assets/shopping.json';
import Lottie from 'lottie-react';

const Loading = () => {
    return (
        <div className="flex min-h-screen justify-center items-center">
            <Lottie animationData={animationData} loop={true} />
        </div>
    );
};

export default Loading;