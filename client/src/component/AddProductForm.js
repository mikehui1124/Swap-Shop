
import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class AddProductForm extends Component{
    render() {
    return(
        <Form>
            <Form.Field>
                <label>Product Name</label>
                <input placeholder='Product Name' />
            </Form.Field>
            <Form.Field>
                <label>URL of the product Photos</label>
                <input placeholder='Please enter the URL' />
            </Form.Field>
            <Form.TextArea label='Product Description' laceholder='Tell us more about your product' />
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
}