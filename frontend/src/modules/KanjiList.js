import React, {Component} from 'react';
import {Card,Container} from 'semantic-ui-react';

export default class KanjiList extends Component {

    render() {
        let kanjiItems = this.props.list.map((kanjis) =>
        <Card key={kanjis._id}>
                <Card.Content>
                    <Card.Header>{kanjis.kanji}</Card.Header>
                </Card.Content>
            </Card>

        )
        return(
            <Container>
                <Card.Group>
                    {kanjiItems}        
                </Card.Group>
            </Container>
        )
    }

}