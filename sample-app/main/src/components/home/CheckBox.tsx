import { Checkbox } from "@chakra-ui/react";

export type Props = {
  pref: string;
};

const CheckBox: any = (props: any) => {
  const { prefectures, onChange } = props;
  return (
    prefectures.length > 0 &&
    prefectures.map((prefectures: any) => {
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
