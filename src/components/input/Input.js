import React from 'react';
import {InputGroup} from 'react-bootstrap';

const Input=({info})=>{    
    
        return(
            <div>
                <div class="input-group input-group-lg">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default"></span>
                    </div>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder={info}/>
                </div>
            </div>            
        );
    
}

export default Input;
