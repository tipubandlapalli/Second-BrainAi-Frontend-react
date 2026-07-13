import { Link } from "react-router-dom";

const SidebarItem = ({ to, tooltip, icon: Icon, children }) => {
  return (
    <li>
      <Link to={to} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip={tooltip}>
        <Icon size={20} />
        <span className="is-drawer-close:hidden">{children}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
