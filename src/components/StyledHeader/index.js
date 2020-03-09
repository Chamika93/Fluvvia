import styled from "styled-components";

const StyledHeader = styled.header`
  min-height: 60vh;
  background: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHeader;
