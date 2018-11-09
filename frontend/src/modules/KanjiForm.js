import React, {Component} from 'react';
import {Form, Container} from 'semantic-ui-react';
import {ToKana} from './ToKana';
import {ROMAJI_TO_HIRAGANA,ROMAJI_TO_KATAKANA} from './MapKanaToRomaji';


export default class KanjiForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id:0,
            onyomi:"",
            kunyomi:"",
            meaning:"",
            hiragana : {}
        }
    }
    
    handleIME = (event) => {
        let state = {};
        if(event.target.name === "onyomi"){
            state[event.target.name] = ToKana(event.target.value, ROMAJI_TO_KATAKANA);
        } else {
            state[event.target.name] = ToKana(event.target.value, ROMAJI_TO_HIRAGANA); 
        }
        this.setState(state);
    }

    onChange = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    submit = (event) => {

    }

    render(){

        return(
            <Container>
                <Form id="kanji_answer">
                    <Form.Field>
                        <label>Onyomi:</label>
                        <input type="text" name="onyomi" onChange={this.handleIME} value={this.state.onyomi}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Kunyomi:</label>
                        <input type="text" name="kunyomi" onChange={this.handleIME} value={this.state.kunyomi}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Onyomi:</label>
                        <input type="text" name="meaning" onChange={this.onChange} value={this.state.meaning}/>
                    </Form.Field>
                </Form>
            </Container>
            
        )

    }

}