import { useRef } from "react";

import Input from "../Input/input";
import * as S from "./styles";

import { OS_TYPES } from "../../utils/constants";
import { DataList } from "../datalist/datalist";

export default function AddDevice({ onSubmitAction }) {
  const name = useRef(null);
  const type = useRef(null);
  const HDD = useRef(null);

  const execSubmit = (event) => {
    event.preventDefault();
    if (!name.current.value || !type.current.value || !HDD.current.value) {
      alert("Please Fill the mandatory fields (*)");
    }
    onSubmitAction({
      name: name.current.value,
      type: type.current.value,
      HDD: HDD.current.value,
    });
  };

  return (
    <S.Form onSubmit={execSubmit}>
      <Input reference={name} labelText={"System Name*"} />
      <Input reference={type} labelText={"Type*"} listID="add_new_device" />
      <DataList ID="add_new_device" optionsList={Object.values(OS_TYPES)} />
      <Input reference={HDD} labelText={"HDD Capacity (GB)*"} type="number" />
      <S.Button type="submit">Save</S.Button>
    </S.Form>
  );
}
