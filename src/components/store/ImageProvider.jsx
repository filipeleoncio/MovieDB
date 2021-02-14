import React, { createContext, useContext, useState } from 'react';

const ImageContext = createContext();

const ImageProvider = ({ children }) => {
    const [allImagesLoaded, setAllImagesLoaded] = useState(false);

    return (
        <ImageContext.Provider
            value={{
                allImagesLoaded,
                setAllImagesLoaded,
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
