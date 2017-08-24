import './_body-comp.scss';
import React from 'react';
import uuid from 'uuid/v1';

import NoteCreate from '../create-note-comp';

class BodyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.noteCreate = this.noteCreate.bind(this);
  }

  noteCreate(note) {
    note.id = uuid();
    this.props.app.setState(state => ({
      notes: [...state.notes, note]
    }));
  }

  render() {
    return (
      <div className='body-container'>
        <NoteCreate handleNoteCreate={this.noteCreate} />
      </div>
    )
  }
}

export default BodyContainer;
