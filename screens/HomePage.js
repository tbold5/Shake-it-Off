import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';

class HomePage extends React.Component {
  state = {
    messages: [],
  };

  componentWillMount() {
    this.setState({
      messages: [
        {
          title: 'Jennifer',
          _id: 1,
          text: 'Hello Pumpkin223, I am here to help :)',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Volunteer',
            avatar:
              'https://foodallergycanada.ca/wp-content/uploads/community-award-2.jpg',
          },
        },
      ],
    });
  }
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}

export default HomePage;
