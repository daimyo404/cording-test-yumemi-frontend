import { Text } from "@chakra-ui/react";
import { TypographyProps } from "@chakra-ui/styled-system";

type Props = {
  message: string;
  fontSize: TypographyProps["fontSize"];
  textAlign: TypographyProps["textAlign"];
};

export const Typography: React.FC<Props> = (props) => {
  const { message, fontSize, textAlign } = props;
  return (
    <Text fontSize={fontSize} textAlign={textAlign}>
      {message}
    </Text>
  );
};

export default Typography;
