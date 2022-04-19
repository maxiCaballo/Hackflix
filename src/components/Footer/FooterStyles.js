import styled from "styled-components";

export const FooterStyles = styled.footer`
  display: grid;
  place-items: center;
  padding: 20px;
  border-top: 1px solid #fffafa4e;
  background-color: #000;
  margin-top: 50px;
  color: #fffafa4e;
  font-weight: 500;

  p {
    cursor: pointer;
    text-align: center;
    a {
      transition: all 0.9s;
      text-decoration: none;
      color: #fffafa4e;
      &:hover {
        color: white;
      }
    }
  }
`;
