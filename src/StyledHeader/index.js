import styled from "styled-components";

const StyledHeader = styled.header`
  min-height: 60vh;
  background: url(${props => props.img});
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default StyledHeader;
