import Home from "../src/pages/Home";
import Foo from "../src/pages/Foo";

const Routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/foo',
    component: Foo,
    customData: { data: 'foo' }
  }
]

export default Routes