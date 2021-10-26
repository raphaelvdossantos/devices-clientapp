import * as S from "./styles";

import { useRef, useState } from "react";

import { ReactComponent as MacLogo } from "../../assets/icons/Apple_logo.svg";
import { ReactComponent as WindowsLogo } from "../../assets/icons/Windows_logo.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/Edit.svg";
import { ReactComponent as Remove } from "../../assets/icons/Remove.svg";
import { cleanHDDString } from "./../../utils/functions";
import { DataList } from "../datalist/datalist";
import { OS_TYPES } from "../../utils/constants";

export default function Device({
  ID,
  type,
  name,
  capacity,
  onDeleteAction,
  onUpdateAction,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const systemName = useRef(null);
  const systemType = useRef(null);
  const HDD = useRef(null);

  const execUpdate = () => {
    HDD.current.value = `${HDD.current.value}GB`;
    const deviceData = {
      name: systemName.current.value,
      type: systemType.current.value,
      HDD: cleanHDDString(HDD.current.value),
    };
    onUpdateAction(ID, deviceData);
    setIsEditing(false);
  };

  const resetValues = () => {
    systemName.current.value = name;
    systemType.current.value = type;
    HDD.current.value = capacity;
  };

  const execCancel = () => {
    setIsEditing(!isEditing);
    resetValues();
  };

  return (
    <S.DeviceContainer enableEdit={isEditing}>
      {type !== "MAC" ? <WindowsLogo /> : <MacLogo />}
      <S.SysCredentials>
        <S.SystemName
          ref={systemName}
          defaultValue={name}
          disabled={!isEditing}
        />
        <S.SystemType
          ref={systemType}
          onFocus={(event) => (event.target.value = "")}
          defaultValue={type}
          disabled={!isEditing}
          list={`osType_${ID}`}
        />
        <DataList ID={`osType_${ID}`} optionsList={Object.values(OS_TYPES)} />
      </S.SysCredentials>
      <S.HDDCapacity
        key={systemName}
        ref={HDD}
        defaultValue={`${capacity}GB`}
        disabled={!isEditing}
      />
      <S.Icons>
        {isEditing ? (
          <>
            <S.EditingButton onClick={execCancel}>cancel</S.EditingButton>
            <S.EditingButton onClick={execUpdate}>save</S.EditingButton>
          </>
        ) : (
          <>
            <S.Button>
              <EditIcon onClick={() => setIsEditing(!isEditing)} />
            </S.Button>
            <S.Button onClick={onDeleteAction}>
              <Remove />
            </S.Button>
          </>
        )}
      </S.Icons>
    </S.DeviceContainer>
  );
}
