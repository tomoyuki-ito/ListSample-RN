import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Header, Left, Right, Button, Icon, Content, List, ListItem, Text } from 'native-base'
import { addDate, clearDate } from '../actions'

class ListSample extends Component {
  render() {
    console.log('render')
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={()=>{
              this.props.clear()
            }}>
              <Icon name='trash' />
            </Button>
          </Left>
          <Right>
            <Button transparent onPress={()=>{
              this.props.add()
            }}>
              <Icon name='add' />
            </Button>
          </Right>
        </Header>
        <Content>
          <List
            dataArray={this.props.items}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            }
          />
        </Content>
      </Container>
    )
  }
}

export default connect(
  state => ({
    items: state.items,
  }),
  dispatch => ({
    add: () => dispatch(addDate()),
    clear: () => dispatch(clearDate()),
  })
)(ListSample)
