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
      'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/77dd9045daf65f13.jpg?q=20',
      'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/54ae867c95cb06e2.jpg?q=20',
      'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9e9aa250dfecdbc3.jpg?q=20',
      'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20',
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
      <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
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



