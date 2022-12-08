import React, {useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })
function handleData(event) {
  const{name, value} = event.target;
  setFormData({
    ...formData,
    [name]: value
  })
}
 return( 
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input value={formData.firstName} placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input value={formData.lastName} placeholder='Last Name' />
    </Form.Field>

    <Form.Input value={formData.email} label='Email' placeholder='Please enter a valid email address' />
    
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)
}
export default SignUp