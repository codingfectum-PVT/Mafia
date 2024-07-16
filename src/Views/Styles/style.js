import styled from "@emotion/styled";

const PageWrapper = styled.div`
    background-color: ${ (props) => props.theme.pageColor};
    padding-top: 20px;
    padding-bottom: 20px;
    min-height: 100vh;
`

const Image = styled.img`
    width: 100%;
    max-width: ${props=>props.mw ? props.mw : "100%"};
    filter: brightness(0.6);
    height: 100%;
    object-fit: cover;
    object-position: right;
    position: absolute;
    z-index: -1;
    width: 100%;
    max-width: 600px;
    right: 0;
    top: 0;
`

export { PageWrapper ,Image}