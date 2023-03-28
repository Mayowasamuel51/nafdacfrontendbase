import route from '../../../routes/route'
import { Route,  Redirect } from "react-router-dom";

function Dashboard() {
  return (
    <>

      <div>

        <Route>
          {route.map((route, index) => {
            return (
              route.component && (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} />}
                />
              )
            );
          })}
          {/* <Redirect from="/unit1Osun" to="/unit1Osun/frontdesk" /> */}
          {/* <Redirect from="/unit1Osun"  /> */}
        </Route>
      </div>
    </>
  )
}


export default Dashboard;