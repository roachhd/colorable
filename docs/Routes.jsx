
var React = require('react')
var Router = require('react-router')
var Route = Router.Route
var DefaultRoute = Router.DefaultRoute
var Redirect = Router.Redirect
var Root = require('./components/Root.jsx')
var Index = require('./components/Index.jsx')
var Demos = require('./components/Demos.jsx')
var TextDemo = require('./components/TextDemo.jsx')
var MatrixDemo = require('./components/MatrixDemo.jsx')

var Routes = (
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Index} />
    <Route path='demos' handler={Demos} />
    <Route path='demos/text' handler={TextDemo} />
    <Route path='demos/matrix' handler={MatrixDemo} />
    <Route path='/colorable/' handler={Index}>
      <Route path='demos' handler={Demos} />
      <Route path='demos/text' handler={TextDemo} />
      <Route path='demos/matrix' handler={MatrixDemo} />
      <Redirect from='demos/' to='demos' />
      <Redirect from='demos/text/' to='demos/text' />
      <Redirect from='demos/matrix/' to='demos/matrix' />
    </Route>
  </Route>
)

module.exports = Routes

