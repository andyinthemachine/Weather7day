import React from 'react';
import { Card, CardBody } from 'reactstrap';
import styled from 'styled-components';

const StyledCard = styled(Card)`
text-align: center;
h2 {
    color: gray;
}
`

const DayDetail = props => {
    return (
        <StyledCard>
            <CardBody>
                <h2> {props.day} </h2>

                <h3>{parseInt(props.current).toFixed(0)}°</h3>
                <p>
                    <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description} />
                </p>
                <p><strong>High: </strong>{parseInt(props.high).toFixed(0)}°</p>
                <p><strong>Low: </strong>{parseInt(props.low).toFixed(0)}°</p>
                <p><strong>Precip: </strong>{props.precip}</p>
            </CardBody>

        </StyledCard>

    )
}

export default DayDetail;