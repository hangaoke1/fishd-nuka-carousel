'use strict';

import Carousel from '../src/carousel';
import React from 'react';
import ReactDom from 'react-dom';
import easingTypes, { easeOutElastic } from 'tween-functions';

class App extends React.Component<any, any> {
  state = {
    slideIndex: 0,
    imgHeight: 176,
    data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
  };

  render() {
    return (<div>
      <Carousel
        style={{ minHeight: 100 }}
        wrapAround
        frameOverflow="visible"
        slideWidth={0.8}
        slideIndex={this.state.slideIndex}
        afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}>
        {this.state.data.map((val, index) => (
            <div
              key={val}
              style={{
                display: 'block',
                position: 'relative',
                height: this.state.imgHeight,
                transition: 'all 0.3s ease',
                transform: `scale(${this.state.slideIndex === index ? 1 : 0.85})`,
                zIndex: `${this.state.slideIndex === index ? 100 : 1}`
              }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </div>
          ))}
      </Carousel>

      <style dangerouslySetInnerHTML={{
        __html: `body { overflow-x: hidden;}`
      }} />
    </div>);
  }
}

ReactDom.render(<App />, document.getElementById('__react-content'));
