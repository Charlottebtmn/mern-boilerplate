import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import api from '../api';
import { ThemeProvider } from 'styled-components';
import image from '../temp.png'
ChatBot.defaultProps.botAvatar="https://metrouk2.files.wordpress.com/2018/02/845144130.jpg?w=748&h=513&crop=1"
ChatBot.defaultProps.userAvatar="https://metrouk2.files.wordpress.com/2018/02/845144130.jpg?w=748&h=513&crop=1"

const theme = {
  background: '#fffff',
  botBubbleColor: '#ec4e20',
  botFontColor: '#040e1c',
  userBubbleColor: '#fec0aa',
  userFontColor: '#040e1c',
};

class Conversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversation: {},
    };
    console.log(this.props.match.params.id);
    api.getConversation(this.props.match.params.id)
      .then((conversation) => {
        let conversationSteps = conversation._celebrity.conversationSteps;
        console.log("DEBUG conversation", conversation);
        for (let iStep = 0; iStep < conversationSteps.length; iStep++) {
          if (conversationSteps[iStep].options && Array.isArray(conversationSteps[iStep].options)) {
            for (let iOption = 0; iOption < conversationSteps[iStep].options.length; iOption++) {
              let formerTrigger = conversationSteps[iStep].options[iOption].trigger;
              conversationSteps[iStep].options[iOption].trigger = ({ value, steps }) => {
                api.addTodo(conversation._celebrity._id,conversation._celebrity.todos[conversationSteps[iStep].options[iOption].todoId])
                // console.log("DEBUG todo", conversation._celebrity.todos[conversationSteps[iStep].options[iOption].todoId]);
                // console.log("DEBUG trigger", conversationSteps[iStep].options[iOption].trigger);
                return formerTrigger
              }
            }
          }

        }
        // conversation._celebrity.conversationSteps[1].options[1].trigger = ({ value, steps }) => {
        //   console.log("DEBUG todo", conversation._celebrity.todos[conversation._celebrity.conversationSteps[1].options[1].todoId]);
        //   return '3'
        // }
        this.setState ({
          conversation
        });
      });
    setInterval(() => {
      api.saveHistory(this.props.match.params.id)
    }
    ,10000)
  }

  disp(){
    if (this.state.conversation._celebrity) {
      return (
        <div>
        <br/>
        <p class="titles title is-4">Your Conversation with {this.state.conversation._celebrity.firstName}</p>
        <ThemeProvider theme={theme}>
          <ChatBot
                  hideUserAvatar={true}
                  hideBotAvatar={true}
                  hideSubmitButton={true}
                  hideHeader={true}
                  botAvatar={image}
                  userAvatar={this.state.conversation._user.pictureUrl}
                  cache={true}
                  cacheName={'cache_'+this.state.conversation._id}
                  steps={this.state.conversation._celebrity.conversationSteps}
          />
        </ThemeProvider>
        </div>
      )}
      else {
        return <div>Pas trouvé</div>
      }
  }
  render() {
    return (
      <div>
        {this.disp()}
      </div>
    );
  }
}

export default Conversation;
