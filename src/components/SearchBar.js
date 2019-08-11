import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

const SearchBar = props => {
    return ( <>
         <Form>
             <FormGroup>
                <Input onChange={props.handleInputChange} value={props.value} type="text" name={props.name} placeholder="City, State/Country" />
                <Button onClick={props.handleFormSubmit}>Submit</Button>
             </FormGroup>
         </Form>
        </>
    )
}
export default SearchBar;

