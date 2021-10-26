import Device from "../device/device";
import AddDevice from "../addDevice/addDevice";

import * as S from "./styles";
import { TAB_TYPE } from "./../../utils/constants";

export default function MainPanel({
  activeTab,
  devices,
  onDeleteAction,
  onUpdateAction,
  onSubmitAction,
}) {
  return activeTab === TAB_TYPE.DASHBOARD ? (
    <S.Container>
      <S.DevicesHeader>
        <S.OSLogo>OS Logo</S.OSLogo>
        <S.Credentials>Name/Type</S.Credentials>
        <S.Capacity>Capacity (GB)</S.Capacity>
      </S.DevicesHeader>
      {devices.length ? (
        devices.map((device) => (
          <Device
            key={device.id}
            ID={device.id}
            name={device.system_name}
            type={device.type}
            capacity={device.hdd_capacity}
            onDeleteAction={() => onDeleteAction(device.id)}
            onUpdateAction={onUpdateAction}
          />
        ))
      ) : (
        <S.EmptyDeviceList>
          <S.EmptyDeviceListText>
            No devices could be found with the specified options.
          </S.EmptyDeviceListText>
        </S.EmptyDeviceList>
      )}
    </S.Container>
  ) : (
    <AddDevice onSubmitAction={onSubmitAction} />
  );
}
