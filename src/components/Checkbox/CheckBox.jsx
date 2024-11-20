// [2024 리액트 컴포넌트 도움글] https://fe-developers.kakaoent.com/2024/240116-common-component/
import { useState } from 'react';

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <div onClick={() => setChecked(!checked)}>
      {/* {checked ? <CheckedIcon /> : <UncheckedIcon />} */}
    </div>
  );
}