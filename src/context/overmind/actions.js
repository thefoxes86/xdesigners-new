const changePage = ({ state }, value) => {
  state.page = value;
};

const pushPages = ({ state }, value) => {
  state.pages = value;
};

const changeImagePage = ({ state }, value) => {
  state.image = value;
};

const activeHoveredObject = ({ state }, value) => {
  state.activeHoveredMouse.hovered = value[0];
  state.activeHoveredMouse.name = value[1];
  state.activeHoveredMouse.img = value[2];
  state.activeHoveredMouse.text = value[3];
  state.activeHoveredMouse.index = value[4];
};
export { changePage, pushPages, changeImagePage, activeHoveredObject };
