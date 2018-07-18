import React from 'react'
import { Mutation } from 'react-apollo'
import { findIndex as _findIndex } from 'lodash'
import onClickOutside from 'react-onclickoutside'


import { CreateCardButton } from './__style'

import GET_LISTS from '../_queries/lists.gql'
import CREATE_CARD from './_createCard.gql'

import EditableCard from '../EditableCard/EditableCard'

class CreateCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editMode: false }
  }

  handleClickOutside = (evt) => {
    console.log(evt)
    this.editModeOff()
  }

  editModeOn = () => this.setState({ editMode: true })

  editModeOff = () => this.setState({ editMode: false })

  submit = (createCard) => {
    createCard({ variables: { listId: this.props.list._id, title: this.editableCardRef.getValue() } })
  }

  update = (cache, { data: { createCard } }) => {
    const { lists } = cache.readQuery({ query: GET_LISTS })

    const idx = _findIndex(lists, ['_id', createCard.listId])
    lists[idx].cards.push(createCard)

    cache.writeQuery({
      query: GET_LISTS,
      data: { lists },
    })
    this.editModeOff()
  }

  render() {
    return (
      <div>
        {!this.state.editMode
          ? <CreateCardButton onClick={this.editModeOn}>+ Add another card</CreateCardButton>
          : (
            <Mutation mutation={CREATE_CARD} update={this.update}>
              {(createCard, { data }) => (
                <EditableCard
                  ref={(ref) => { this.editableCardRef = ref }}
                  list={this.props.list}
                  buttonText="Add card"
                  onClick={() => this.submit(createCard)}
                />
              )}
            </Mutation>
          )
        }
      </div>
    )
  }
}

export default onClickOutside(CreateCard)
