import React from "react";

/**
 * props:
 * name: string
 * withImage: boolean
 */
class GreetingImage extends React.Component {
  render() {
    const { name, withImage } = this.props;

    return (
      <div>
        <h1>Good Morning {name}</h1>
        {withImage && (
          <img src="https://api.dicebear.com/9.x/adventurer/svg" alt="avatar" />
        )}
      </div>
    );
  }
}

export default GreetingImage;
