import React from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import styled from 'styled-components';

const CardWrapper = styled.div`
h3{
    font-weight: 500
}
img{
    width: 75px
}
color: palevioletred;
.card {
    border: ${props => props.isActive ? "2px solid gray" : "2px solid gray"}
    text-align: center
    background-color: papayawhip
}
.card-header {
    background: ${props => props.isActive ? "gray" : null};
}
:hover{
    .card {
        border: 2px solid palevioletred;
    }
}
`

const DayCard = props => {
    return (
        <Col>
            <CardWrapper onClick={props.selectDay} isActive={props.isActive}>
                <Card>
                    <CardHeader>{props.day}</CardHeader>
                    <CardBody>
                        <h3>{parseInt(props.current).toFixed(0)}°</h3>
                        <p> <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description} /> </p>
                        <p><strong>High: </strong>{parseInt(props.high).toFixed(0)}°</p>
                        <p><strong>Low: </strong>{parseInt(props.low).toFixed(0)}°</p>
                        <p><strong>Precp: </strong>{props.precip}%</p>
                        {props.isActive &&
                            (<p><strong>Hum: </strong>{parseInt(props.relhumidity).toFixed(0)}%</p>)}
                        {props.isActive &&
                            (<p><strong>Wind: </strong>{parseInt(props.windspeed).toFixed(0)} m</p>)}
                        {/* {props.isActive &&
                            (<p><strong>Ozone: </strong>{parseInt(props.ozone).toFixed(0)}</p>)} */}

                        {props.isActive ?
                            (<p><strong>Wdir: </strong>{props.winddir}</p>) : (<p></p>)}
                        {props.isActive ?
                            (<p><strong>Ozone: </strong>{parseInt(props.ozone).toFixed(0)}</p>) : (<p></p>)}
                        {props.isActive ?
                            (<p><strong>UV: </strong>{parseInt(props.uv).toFixed(0)}</p>) : (<p></p>)}





                    </CardBody>
                </Card>
            </CardWrapper>
        </Col>
    )
}

export default DayCard;