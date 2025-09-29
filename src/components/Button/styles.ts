import styled from "@emotion/styled";

interface ButtonComponentProps {
  $variant: "save" | "search" | "delete";
}

const generateButtonColor = (variant: string, disabled?: boolean) => {
  if (disabled) return "#acacacff";
  switch (variant) {
    case "search":
      return "#3678B4";
    case "delete":
      return "transparent";
    default:
      return "transparent";
  }
};

const generateButtonColorOnHover = (variant: string, disabled?: boolean) => {
  if (disabled) return "#acacacff";
  switch (variant) {
    case "search":
      return "#7a99b6ff";
    case "delete":
      return "#86393971";
    case "save":
      return "#05720c4a";
    default:
      return "#ffffff26";
  }
};

export const ButtonComponent = styled.button<ButtonComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  height: 48px;
  width: 155px;
  border-radius: 50px;
  border: ${({ $variant }) =>
    $variant === "save" || $variant === "delete" ? "1px solid #fff" : "none"};
  background-color: ${({ $variant, disabled }) =>
    generateButtonColor($variant, disabled)};
  color: #ffffff;
  font-size: 20px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ $variant, disabled }) =>
      generateButtonColorOnHover($variant, disabled)};
  }
`;
