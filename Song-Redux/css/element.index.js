import styled from 'styled-components';

export const Button =styled.button`
    background-color:#2ecc71;
    margin-top:2px;
    padding:8px;
    border:1px solid #E0DCDC;
    box-shadow:2px 1px 2px grey;
    border-radius:4px;
    width:90px;
    margin-left:10px;
    &:hover {
        opacity:0.8;
        box-shadow:2px 1px 2px blue;
    }
`;
export const Ptag = styled.p`
    font-size:20px;
    margin-top:10px;
    margin-left:20px;
    margin-right:20px;
    margin-bottom:7px; 
    width:30%; 
`;
export const Container = styled.div`
    display:flex;
    align-items:flex-start;
    border-bottom:1px solid grey;
`;
export const Img = styled.img`
    border:1px solid grey;
    border-radius:3px;
    margin-left:20px;
    margin-right:40px;
    height:35px;
`;
export const DetailImg =styled.img`
    margin:10px;
    width:200px;
    border-radius:70px;
    border:1px solid grey;
`;
export const Title = styled.h1`
    text-align:center;
    color:#3487D1;
`;
export const Container1 =styled.p`
        text-align:center;
        font-size:50px;
        margin-top:60px;
        margin-right:90px;
        margin-left:30px;
        content-justify:space-around;
`;
