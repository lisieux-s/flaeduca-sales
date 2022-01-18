import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState('')
    const [DD, setDD] = useState(null)
    const [HH, setHH] = useState(null)
    const [MM, setMM] = useState(null)
    const [SS, setSS] = useState(null)

    function calculateTimeLeft() {
        let date = new Date("Jan 31, 2022 00:00:00").getTime();
        let now = new Date().getTime();
        let timeLeft = date - now;

        setDD(Math.floor(timeLeft/(1000*60*60*24)));
        setHH(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        setMM(Math.floor((timeLeft  % (1000 * 60 * 60)) / (1000 * 60)))
        setSS(Math.floor((timeLeft % (1000 * 60)) / 1000))
    }

    setTimeout(() => {
        calculateTimeLeft();
    }, 1000)

    return (
        <CountdownWrapper className="box-shadow">
            <div>
                <div>{DD}</div>
                <div className="label">DIAS</div>
            </div>
            <div>
                <div>{HH}</div>
                <div className="label">HORAS</div>
            </div>
            <div>
                <div>{MM}</div>
                <div className="label">MINUTOS</div>
            </div>
            <div>
                <div>{SS}</div>
                <div className="label">SEGUNDOS</div>
            </div>
        </CountdownWrapper>
    )
}

const CountdownWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    background: #e19db4;
    padding: 10px;

    div {
        div {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 64px;
            height: 64px;
            border: 0;
        border-radius: 5px;
        background: white;
        }
        .label {
            height: 32px;
            background: none;
            color: #fff;
        }
    }

`