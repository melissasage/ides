import React from "react"
import Schedule from "./Schedule"
import { getEvents } from "../reducers"
import { connect } from "react-redux"

// Start by writing here! Frontend first!
// const dummy = [{time: "7am", title: "breakfast"}, {time: "12pm", title: "lunch"}, {time: "6pm", title: "dinner"}]

class App extends React.Component {
  componentDidMount() {
    this.props.getEvents()
  }
  render() {
    return <Schedule events={this.props.events} />
  }
}

const mapStateToProps = state => ({
  events: state.events
})

const mapDispatchToProps = dispatch => ({
  getEvents: () => dispatch(getEvents())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
