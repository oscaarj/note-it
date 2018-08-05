import React, { Component } from 'react'
import styled from 'styled-components'
import { Form, Field } from 'react-final-form'
import Button from '../Button'
import breakpoints from '../../styles/breakpoints'
import { generateId } from '../../utils/helpers'

const FormContainer = styled.div`
  margin: 50px 0;
  max-width: 650px;
  padding-right: 50px;

  @media (max-width: ${breakpoints.medium}) {
    padding-right: 0;
    margin-top: 30px;
    margin-bottom: 0;
  }
`

const Textarea = styled.textarea`
  background-image: url(https://static.tumblr.com/maopbtg/E9Bmgtoht/lines.png),
    url(https://static.tumblr.com/maopbtg/nBUmgtogx/paper.png);
  border: 0;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  font-size: 18px;
  line-height: 40px;
  height: 359px;
  overflow: hidden;
  resize: none;
  padding: 40px 15px 0 105px;
  width: 100%;
  word-wrap: break-word;

  &:focus {
    outline: 0;
  }

  @media (max-width: ${breakpoints.medium}) {
    background-position: -40px;
    padding-left: 65px;
  }
`

const validateNote = note => (note ? undefined : true)

class NoteForm extends Component {
  onSubmit = (values, form) => {
    this.props.actions.createNote({
      ...values,
      id: generateId()
    })

    setTimeout(() => form.reset(), 200)
  }

  render() {
    return (
      <FormContainer>
        <Form
          onSubmit={this.onSubmit}
          initialValues={{
            note: ''
          }}
          render={({ handleSubmit, invalid, pristine }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="note"
                validate={validateNote}
                render={({ input }) => (
                  <Textarea
                    name="note"
                    cols="30"
                    rows="15"
                    placeholder="Scribble away"
                    {...input}
                  />
                )}
              />
              <br />
              <Button disabled={pristine || invalid} style={{ marginTop: 25 }}>
                Add Note
              </Button>
            </form>
          )}
        />
      </FormContainer>
    )
  }
}

export default NoteForm
