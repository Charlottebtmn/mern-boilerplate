import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import api from '../api';


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
      return (<ChatBot
        cache={true}
        cacheName={'cache_'+this.state.conversation._id}
        steps={this.state.conversation._celebrity.conversationSteps}
      />)
      }
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
