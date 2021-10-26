import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContainerHeader from "../../components/containerHeader/containerHeader";

import {
  deleteDevice,
  getDevices,
  updateDevice,
  postDevice,
} from "../../store/actions/devices";
import { setActiveTab, setFilters } from "./../../store/actions/panel";
import MainPanel from "../../components/mainPanel/mainPanel";
import { filterDevices, sortDevicesBy } from "./../../utils/functions";

import * as S from "./styles";

export default function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDevices());
  }, []);

  const allDevices = useSelector((state) => state.devices);
  const activeTab = useSelector((state) => state.panel.activeTab);
  const sortFilter = useSelector((state) => state.panel.filters.sortBy);
  const devicesFilter = useSelector((state) => state.panel.filters.deviceType);

  const onClickHandler = (tab) => {
    dispatch(setActiveTab(tab));
  };

  const onDeleteHandler = (deviceID) => {
    dispatch(deleteDevice(deviceID));
  };

  const onUpdateHandler = (deviceID, deviceData) => {
    dispatch(updateDevice(deviceID, deviceData));
  };

  const onSubmitHandler = (deviceData) => {
    dispatch(postDevice(deviceData));
  };

  const onChangeSortHandler = (newSort) => {
    dispatch(setFilters({ sortBy: newSort }));
  };

  const onChangeFilterHandler = (newFilter) => {
    dispatch(setFilters({ deviceType: newFilter }));
  };

  const devices = sortDevicesBy(
    sortFilter,
    filterDevices(devicesFilter, allDevices)
  );

  return (
    <S.Container>
      <ContainerHeader
        onSortAction={onChangeSortHandler}
        onFilterAction={onChangeFilterHandler}
        activeTab={activeTab}
        onClickAction={onClickHandler}
      />
      <MainPanel
        activeTab={activeTab}
        devices={devices}
        onDeleteAction={onDeleteHandler}
        onUpdateAction={onUpdateHandler}
        onSubmitAction={onSubmitHandler}
      />
    </S.Container>
  );
}
