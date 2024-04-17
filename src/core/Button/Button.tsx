import styled from "styled-components";

export const Button = styled.button<{ $primary?: boolean }>`
  background-color: ${(props) => (props.$primary ? "var(--primary)" : "var(--btn-bg)")};
  border: ${(props) => (props.$primary ? 0 : "1px solid #2c415d")};
  color: var(--primary-fg);
  font-weight: 500;
  padding: 7px 30px;

  &:hover {
    background-color: ${(props) => (props.$primary ? "#1e5ca6" : "var(--btn-bg)")};
    border-color: ${(props) => (props.$primary ? "" : "var(--primary)")};
  }
  &:active {
    border-color: ${(props) => (props.$primary ? "" : "#2c415d")};
    color: ${(props) => (props.$primary ? "" : "var(--btn-active)")};
  }
`;
