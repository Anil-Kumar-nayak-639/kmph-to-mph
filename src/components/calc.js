import React from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
const Calc = () => {
    const [number, setNumber] = React.useState({
        kmph: 0,
        mph: 0
    })
    const change1 = (kmph) => {
        const mph = kmph / 1.609
        setNumber({
            kmph: kmph,
            mph: mph
        })
    }
    const change2 = (mph) => {
        const kmph = mph * 1.609
        setNumber({
            kmph: kmph,
            mph: mph
        })
    }

    return (
        <div>
            <h1 id="heading">KMPH To MPH</h1>
            <div className="cardBody">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Form.Label htmlFor="text">KMPH</Form.Label>
                        <Form.Control
                            type="number"
                            onChange={(e) => change1(e.target.value)}
                            value={number.kmph}


                        />
                        <Form.Label htmlFor="text">MPH</Form.Label>
                        <Form.Control
                            type="number"
                            onChange={(e) => change2(e.target.value)}
                            value={number.mph}

                        />



                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
export default Calc