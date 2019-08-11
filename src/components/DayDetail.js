import React from 'react';
import { CardBody } from 'reactstrap';
import styled from 'styled-components';

const StyledCard = styled(CardBody)`
background-color: papayawhip
text-align: center
h3 {
    color: palevioletred;
}
`

const DayDetail = props => {
    return (
        <StyledCard>
            <CardBody>
                <h3> {props.day} </h3>
                <h3>{parseInt(props.current).toFixed(0)}°</h3>
                <p>
                    <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description} />
                </p>
                <p><strong> {props.description}</strong></p>
                <p><strong>High: </strong>{parseInt(props.high).toFixed(0)}°</p>
                <p><strong>Low: </strong>{parseInt(props.low).toFixed(0)}°</p>
                <p><strong>Precip: </strong>{props.precip}%</p>
                <p><strong>Humidity: </strong>{props.relhumidity}%</p>
                <p><strong>Wind Speed: </strong>{props.windspeed}</p>
                {/* <p><strong>Sunrise: </strong>{props.sunrise}</p> */}
                <p><strong>Ozone: </strong>{parseInt(props.ozone).toFixed(0)}</p>
            </CardBody>

        </StyledCard>

    )
}

export default DayDetail;

