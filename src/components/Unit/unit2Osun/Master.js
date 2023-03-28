import route from '../../../routes/osun2routes'
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
          <Redirect from="/unit2Osun" to="/unit2Osun/frontdesk" />
        </Route>
      </div>
    </>
  )
}


export default Dashboard;