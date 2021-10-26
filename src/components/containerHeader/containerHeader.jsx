import * as S from "./styles";

import { TAB_TYPE } from "./../../utils/constants";
import Filter from "../filters/filter";

export default function ContainerHeader({
  activeTab,
  onClickAction,
  onSortAction,
  onFilterAction,
}) {
  const isDashBoard = activeTab === TAB_TYPE.DASHBOARD;
  return (
    <S.Container>
      <S.Tab
        isActive={isDashBoard}
        onClick={() => onClickAction(TAB_TYPE.DASHBOARD)}
      >
        dashboard
      </S.Tab>
      <S.Tab
        isActive={!isDashBoard}
        onClick={() => onClickAction(TAB_TYPE.ADD_DEVICE)}
      >
        new device
      </S.Tab>
      {isDashBoard ? (
        <Filter onSortAction={onSortAction} onFilterAction={onFilterAction} />
      ) : null}
    </S.Container>
  );
}
