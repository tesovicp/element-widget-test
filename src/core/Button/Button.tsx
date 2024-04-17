import styled from "styled-components";

export const Button = styled.button<{ $primary?: boolean; $small?: boolean }>`
  background-color: ${({ $primary }) => ($primary ? "var(--primary)" : "var(--btn-bg)")};
  border: ${({ $primary }) => ($primary ? 0 : "1px solid #2c415d")};
  color: ${({ $primary }) => ($primary ? "var(--primary-fg)" : "var(--secondary-fg)")};
  font-weight: 500;
  padding: 7px 30px;

  &:hover {
    background-color: ${({ $primary }) => ($primary ? "#1e5ca6" : "var(--btn-bg)")};
    border-color: ${({ $primary }) => ($primary ? "" : "var(--primary)")};
  }
  &:active {
    border-color: ${({ $primary }) => ($primary ? "" : "#2c415d")};
    color: ${({ $primary }) => ($primary ? "" : "var(--btn-active)")};
  }

  @media (max-width: 480px) {
    padding: ${({ $small }) => ($small ? "7px 15px" : "7px 30px")};
  }
`;
