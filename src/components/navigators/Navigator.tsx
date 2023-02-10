import { NavLink, Outlet } from "react-router-dom"
import { NavigatorProps } from './../../models/NavigatorProps'
import './navigators.css'
type NavigProps = {
    navigConfig: NavigatorProps;
}
export const Navigator: React.FC<NavigProps> = (props) => {
    function getList(): JSX.Element[] {
        return props.navigConfig.routeItems.map(item => {
            return <li className="navigator-item">
                <NavLink style={({ isActive }) => activingLink(isActive)} to={item.routPath}>{item.label}</NavLink>
            </li>
        })
    }
    function activingLink(isActive: boolean): React.CSSProperties | undefined {
        let result: React.CSSProperties = {};
        if (isActive) {
            result = { backgroundColor: "yellow", color: "green" }
        }
        return result;
    }
    return <div>
        <nav>
            <ul className={props.navigConfig.cssClassName}>
                {getList()}
            </ul>
        </nav>
        <Outlet></Outlet>
    </div>
}