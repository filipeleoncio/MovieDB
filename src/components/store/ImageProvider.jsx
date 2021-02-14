import React, { createContext, useContext, useState } from 'react';

const ImageContext = createContext();

const ImageProvider = ({ children }) => {
    const [countImagesLoaded, setCountImagesLoaded] = useState(0);

    return (
        <ImageContext.Provider
            value={{
                countImagesLoaded,
                setCountImagesLoaded,
            }}
        >
            {children}
        </ImageContext.Provider>
    );
};

export const useImageContext = () => {
    return useContext(ImageContext);
};

export default ImageProvider;
