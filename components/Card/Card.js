import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import onClickOutside from 'react-onclickoutside'
import { findIndex as _findIndex } from 'lodash'

import GET_LISTS from '../_queries/lists.gql'
import UPDATE_CARD from './_updateCard.gql'

import { CardContainer, Icon } from './__style'

import DeleteButton from './DeleteButton'
import EditableCard from '../EditableCard/EditableCard'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editMode: false }
  }

  handleClickOutside = () => {
    this.editModeOff()
  }

  editModeOn = () => this.setState({ editMode: true })

  editModeOff = () => this.setState({ editMode: false })

  submit = (updateCard) => {
    updateCard({
      variables: {
        listId: this.props.card.listId,
        cardId: this.props.card._id,
        title: this.editableCardRef.getValue(),
      },
    })
  }

  update = (cache, { data: { updateCard } }) => {
    const { lists } = cache.readQuery({ query: GET_LISTS })
    const idxList = _findIndex(lists, ['_id', updateCard.listId])
    const idxCard = _findIndex(lists[idxList].cards, ['_id', updateCard._id])
    lists[idxList].cards[idxCard].title = updateCard.title

    cache.writeQuery({
      query: GET_LISTS,
      data: { lists },
    })

    this.editModeOff()
  }

  render() {
    const { card } = this.props

    if (this.state.editMode) {
      return (
        <Mutation mutation={UPDATE_CARD} update={this.update}>
          {updateCard => (
            <EditableCard
              ref={(ref) => { this.editableCardRef = ref }}
              initialValue={this.props.card.title}
              buttonText="Update card"
              onClick={() => this.submit(updateCard)}
            />
          )}
        </Mutation>
      )
    }

    return (
      <CardContainer>
        {card.title}
        <div>
          <Icon onClick={this.editModeOn} name="fas fa-pen" />
          <DeleteButton card={card} />
        </div>
      </CardContainer>
    )
  }
}

Card.propTypes = { card: PropTypes.object.isRequired }

export default onClickOutside(Card)
