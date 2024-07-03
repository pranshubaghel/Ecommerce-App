import React, { Component } from 'react';

interface HeroSectionState {
  currentImageIndex: number;
  images: string[];
}

class HeroSection extends Component<{}, HeroSectionState> {
  intervalId: number | undefined;

  state: HeroSectionState = {
    currentImageIndex: 0,
    images: [
      'https://cdn.pixabay.com/photo/2019/12/14/08/36/shopping-4694470_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/08/25/07/37/shoes-8212405_640.jpg',
      'https://media.istockphoto.com/id/1346883665/photo/happy-woman-shopping-online-at-home-stock-photo.jpg?s=1024x1024&w=is&k=20&c=6Ox03lu2rkECd9H8kLoHYd0Gi9OCtHF2oqt8qNJW3ME=',
      'https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_1280.jpg',
    ],
  };

  componentDidMount() {
    this.intervalId = window.setInterval(this.changeImage, 2000);
  }

  componentWillUnmount() {
    if (this.intervalId !== undefined) {
      window.clearInterval(this.intervalId);
    }
  }

  changeImage = () => {
    const { currentImageIndex, images } = this.state;
    const newIndex = (currentImageIndex + 1) % images.length;
    this.setState({ currentImageIndex: newIndex });
  };

  render() {
    const { currentImageIndex, images } = this.state;
    const currentImage = images[currentImageIndex];
    
    return (
      <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
        <img 
          src={currentImage}
          alt={`Image ${currentImageIndex}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    );
  }
}

export default HeroSection;



