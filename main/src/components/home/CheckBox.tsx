import { Checkbox } from "@chakra-ui/react";

type Prefectures = {
  prefCode: number;
  prefName: string;
};

type CheckBoxOnChange = (
  prefCode: number,
  prefName: string,
  checked: boolean
) => void;

type Props = {
  prefectures: Prefectures[];
  onChange: CheckBoxOnChange;
};

const CheckBox: React.FC<Props> = (props) => {
  const { prefectures, onChange } = props;
  return (
    prefectures.length > 0 &&
    prefectures.map((prefectures: Prefectures) => {
      return (
        <Checkbox
          key={prefectures.prefCode}
          onChange={(e) => {
            onChange(
              prefectures.prefCode,
              prefectures.prefName,
              e.target.checked
            );
          }}
        >
          {prefectures.prefName}
        </Checkbox>
      );
    })
  );
};

export default CheckBox;
