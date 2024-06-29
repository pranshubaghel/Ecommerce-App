// import React, { Component } from 'react';

// interface HeroSectionState {
//   currentImageIndex: number;
//   images: string[];
// }

// class HeroSection extends Component<{}, HeroSectionState> {
//   intervalId: number | undefined;

//   state: HeroSectionState = {
//     currentImageIndex: 0,
//     images: [
    //   'https://cdn.pixabay.com/photo/2019/12/14/08/36/shopping-4694470_1280.jpg',
    //   'https://cdn.pixabay.com/photo/2023/08/25/07/37/shoes-8212405_640.jpg',
    //   'https://media.istockphoto.com/id/1346883665/photo/happy-woman-shopping-online-at-home-stock-photo.jpg?s=1024x1024&w=is&k=20&c=6Ox03lu2rkECd9H8kLoHYd0Gi9OCtHF2oqt8qNJW3ME=',
    //   'https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_1280.jpg',
//     ],
//   };

//   componentDidMount() {
//     this.intervalId = window.setInterval(this.changeImage, 2000);
//   }

//   componentWillUnmount() {
//     if (this.intervalId !== undefined) {
//       window.clearInterval(this.intervalId);
//     }
//   }

//   changeImage = () => {
//     const { currentImageIndex, images } = this.state;
//     const newIndex = (currentImageIndex + 1) % images.length;
//     this.setState({ currentImageIndex: newIndex });
//   };

//   render() {
//     const { currentImageIndex, images } = this.state;
//     const currentImage = images[currentImageIndex];
    
//     return (
//       <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
//         <img 
//           src={currentImage}
//           alt={`Image ${currentImageIndex}`}
//           style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//         />
//       </div>
//     );
//   }
// }

// export default HeroSection;

import { Box } from '@mui/material';
import React, { Component } from 'react';

interface State {
  currentImageIndex: number;
  images: string[];
  intervalId: number | null;
}

export default class HeroSection extends Component<{}, State> {
  state: State = {
    currentImageIndex: 0,
    images: [
      'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/228957c24d2b0983.jpg?q=20',
      'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1aaeb0a6531bef88.jpg?q=20',
      'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/78e89d02375d5222.jpg?q=20',
      //  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20',
    ],
    intervalId: null,
  };

  componentDidMount() {
    this.startSlideshow();
  }

  componentWillUnmount() {
    this.stopSlideshow();
  }

  startSlideshow = () => {
    const intervalId = window.setInterval(this.nextImage, 3000); // Change image every 3 seconds
    this.setState({ intervalId });
  };

  stopSlideshow = () => {
    if (this.state.intervalId !== null) {
      clearInterval(this.state.intervalId);
      this.setState({ intervalId: null });
    }
  };

  nextImage = () => {
    this.setState((prevState) => ({
      currentImageIndex: (prevState.currentImageIndex + 1) % prevState.images.length,
    }));
  };

  render() {
    const { currentImageIndex, images } = this.state;
    return (
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="50vh"
      sx={{
        overflow: 'hidden', 
      }}
    >
      <Box
        component="img"
        src={images[currentImageIndex]}
        alt={`image-${currentImageIndex}`}
        sx={{
          width: '100%',
          height: 'auto',
          maxHeight: '100%',
          objectFit: 'cover',
          border: '5px solid #ddd',
          marginBottom: "7rem"
          
        }}
      />
      </Box>
    );
  }
}

