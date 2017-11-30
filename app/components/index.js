import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Header, Left, Right, Button, Icon, Content, List, ListItem, Text } from 'native-base'
import { addDate, clearDate } from '../actions'

class ListSample extends Component {
  render() {
    console.log('render')
    const { clear, add, items } = this.props
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={clear}>
              <Icon name='trash' />
            </Button>
          </Left>
          <Right>
            <Button transparent onPress={add}>
              <Icon name='add' />
            </Button>
          </Right>
        </Header>
        <Content>
          <List
            dataArray={items}
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
