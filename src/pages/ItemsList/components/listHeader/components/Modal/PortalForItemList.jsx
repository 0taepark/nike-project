import reactDom from 'react-dom';

const ModarlPortalForItemList = ({ children }) => {
  const el = document.getElementById('modalForItemList');
  return reactDom.createPortal(children, el);
};

export default ModarlPortalForItemList;
