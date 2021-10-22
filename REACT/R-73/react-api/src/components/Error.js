import styled from "styled-components";

const Error = ({text}) => {
    return (
        <ErrorBox>
            <ErrorMessage>{text}</ErrorMessage>
        </ErrorBox>
    );
};

export default Error;

const ErrorBox = styled.div`
    display: flex;
    background-clour: rgba(218, 120, 121, 0.3);
    padding: 10px;
    border: 1px solid red;
    width: 100%;
    border-radius: 5px;
`

const ErrorMessage = styled.p`
   color: red;
   font-size: 14px;
   text-align: center;
`
