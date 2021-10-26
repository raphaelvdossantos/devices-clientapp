import { DEVICES_FILTER, SORTBY_TYPES } from "../../utils/constants";
import { DataList } from "../datalist/datalist";
import * as S from "./styles";

export default function Filter({ onSortAction, onFilterAction }) {
  const execFilterChange = (event, callback) => {
    event.target.value && callback(event.target.value);
    event.target.blur();
  };

  return (
    <S.Container>
      <S.Label htmlFor="sysType">
        Device Type:
        <S.Filter
          onFocus={(event) => (event.target.value = "")}
          onChange={(event) => execFilterChange(event, onFilterAction)}
          name="sysType"
          id="sysType"
          list="systemTypeFilter"
        />
      </S.Label>
      <DataList
        ID={"systemTypeFilter"}
        optionsList={Object.values(DEVICES_FILTER)}
      />
      <S.Label htmlFor="sort">
        Sort By:
        <S.Filter
          onFocus={(event) => (event.target.value = "")}
          onChange={(event) => execFilterChange(event, onSortAction)}
          name="sort"
          id="sort"
          list="sotyBy_options"
        />
      </S.Label>
      <DataList ID="sotyBy_options" optionsList={Object.values(SORTBY_TYPES)} />
    </S.Container>
  );
}
